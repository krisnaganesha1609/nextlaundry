import { Button, Input, Modal, Spacer, Text, Dropdown } from '@nextui-org/react'
import { useState, useMemo, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { postRequest } from "../../../helper/axios-client";
import { toast } from "react-toastify";
import { authAtom } from "../../../logic/atoms/auth";
import { usersAtom } from "../../../logic/atoms/users";
import { getRequest } from "../../../helper/axios-client";

const ModalAddPackage = ({ close, visible, save }) => {
    const [rp, setRp] = useState(false)
    const [selected, setSelected] = useState(new Set(["Outlet Placement "]));
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const [selectedType, setSelectedType] = useState(new Set(["Package Type"]));
    const selectedTypes = useMemo(
        () => Array.from(selectedType).join(", ").replaceAll("_", " "),
        [selectedType]
    );
    const [loading, setLoading] = useState(false);
    const name = useRef()
    const price = useRef()
    const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)
    const [outletModel, setOutletModel] = useState([])

    const submitHandler = async (ev) => {
        ev.preventDefault()
        setLoading(true);
        const id = toast.loading("Adding New User...");
        try {
            const json = {
                id_product: null,
                product_name: name.current.value,
                price: parseInt(price.current.value),
                user_outlet: parseInt(selectedValue),
                type: selectedTypes
            };
            await postRequest("api/nextlaundry/admin/product", JSON.stringify(json), `Bearer ${token}`).then((res) => {
                toast.update(id, {
                    render: res.data.message,
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                });
                { close }
            });
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
        }
    }
    const outletModelFetcher = async () => {

        if (user.role.toLowerCase() === "admin") {
            await getRequest("api/nextlaundry/admin/outlets", `Bearer ${token}`).then((res) => {
                setOutletModel(res.data.outlet)
                console.log(res.data.outlet)
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    useEffect(() => {
        outletModelFetcher()
    }, []);
    return (
        <>
            <Modal width='35%' open={visible} closeButton onClose={close} aria-labelledby="modal-add-member" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Add New
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        Package
                    </Text>

                </Modal.Header>
                <form onSubmit={submitHandler}>
                    <Modal.Body>
                        <Input labelLeft="Package" type="text" clearable fullWidth color='primary' size='lg' ref={name} placeholder='type here...' />
                        <Input onClick={() => {setRp(true)}} labelLeft={rp ? "Rp." : "Price"} type="text"  ref={price} clearable fullWidth color='primary' size='lg' price={price} placeholder='type here...' />
                        <Dropdown css={{ minWidth: "100%", fontFamily: "Righteous" }} >
                            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                {selectedValue}
                            </Dropdown.Button>
                            <Dropdown.Menu

                                aria-label="Single selection actions"
                                color="secondary"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected}
                                onSelectionChange={setSelected}
                            >
                                {
                                    outletModel.map((item) => (
                                        <Dropdown.Item key={item.id_outlet}>{item.nama_outlet}</Dropdown.Item>
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown css={{ minWidth: "100%", fontFamily: "Righteous" }} >
                            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                {selectedTypes}
                            </Dropdown.Button>
                            <Dropdown.Menu

                                aria-label="Single selection actions"
                                color="secondary"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedType}
                                onSelectionChange={setSelectedType}
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

export default ModalAddPackage