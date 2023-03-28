import { Button, Input, Modal, Radio, Spacer, Text, Dropdown } from '@nextui-org/react'
import { useState, useMemo, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { putRequest } from "../../../helper/axios-client";
import { toast } from "react-toastify";
import { authAtom } from "../../../logic/atoms/auth";
import { productUpdatesAtom } from "../../../logic/atoms/details";

const ModalEditPackage = ({visible, close, outlet}) => {
  const [rp, setRp] = useState(false)
    const data = useRecoilValue(productUpdatesAtom)
    const [selected, setSelected] = useState(new Set([""]));
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const [type, setType] = useState(new Set([""]));
    const typeValue = useMemo(
        () => Array.from(type).join(", ").replaceAll("_", " "),
        [type]
    );
    const [loading, setLoading] = useState(false);
    const name = useRef()
    const price = useRef()
    const token = useRecoilValue(authAtom)

    const submitHandler = async (ev) => {
        setLoading(true);
        const id = toast.loading("Updating Product...");
        try {
            const json = {
                product_name: !name.current ? data.product_name : name.current.value,
                price: !price.current ? data.price : parseInt(price.current.value),
                user_outlet: !selectedValue ? data.outlet.id_outlet : parseInt(selectedValue),
                type: !typeValue ? data.type : typeValue
            };
            await putRequest(`api/nextlaundry/admin/product/${data.id_product}`, JSON.stringify(json), `Bearer ${token}`).then((res) => {
                toast.update(id, {
                    render: res.data.message,
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                });
                
                // { close }
            });
            console.log(JSON.stringify(json))
        } catch (err) {
            toast.update(id, {
                render: "Error Happened. Try Again Later!",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
            console.error(err);
        } finally {
            setLoading(false);
            // window.location.reload();
        }
    }
    return (
        <>
            <Modal width='35%' open={visible} closeButton onClose={close} aria-labelledby="modal-add-member" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Edit
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        User
                    </Text>

                </Modal.Header>
                <form onSubmit={submitHandler}>
                <Modal.Body>
                        <Input labelLeft="Package" type="text" clearable fullWidth color='primary' size='lg' initialValue={data.product_name} ref={!name ? data.product_name : name}  placeholder='type here...' />
                        <Input onClick={() => {setRp(true)}} labelLeft={rp ? "Rp." : "Price"} type="text" initialValue={data.price} ref={!price ? data.price : price} clearable fullWidth color='primary' size='lg' price={price} placeholder='type here...' />
                        <Dropdown css={{ minWidth: "100%", fontFamily: "Righteous" }} >
                            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                            {selectedValue === "" ? data.user_outlet : selectedValue}
                            </Dropdown.Button>
                            <Dropdown.Menu

                                aria-label="Single selection actions"
                                color="secondary"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={!selected ? data.outlet.id_outlet : selected}
                                onSelectionChange={setSelected}
                            >
                                {
                                    outlet.map((item) => (
                                        <Dropdown.Item key={item.id_outlet}>{item.nama_outlet}</Dropdown.Item>
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown css={{ minWidth: "100%", fontFamily: "Righteous" }} >
                            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                {typeValue === "" ? data.type : typeValue}
                            </Dropdown.Button>
                            <Dropdown.Menu

                                aria-label="Single selection actions"
                                color="secondary"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={!type ? data.type : type}
                                onSelectionChange={setType}
                            >
                                <Dropdown.Item key="kiloan">Kilos</Dropdown.Item>
                                <Dropdown.Item key="selimut">Blanket</Dropdown.Item>
                                <Dropdown.Item key="bed_cover">Bed Cover</Dropdown.Item>
                                <Dropdown.Item key="kaos">T-Shirt</Dropdown.Item>
                                <Dropdown.Item key="lain">Other</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button type='submit' color="secondary" isDisabled={loading}>Save The Data</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalEditPackage