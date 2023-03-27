import { Button, Input, Modal, Radio, Spacer, Text, Dropdown } from '@nextui-org/react'
import { useState, useMemo, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { putRequest } from "../../../helper/axios-client";
import { toast } from "react-toastify";
import { authAtom } from "../../../logic/atoms/auth";
import { userUpdatesAtom } from "../../../logic/atoms/details";

const ModalEditUser = ({visible, close, outlet}) => {
    const data = useRecoilValue(userUpdatesAtom)
    const [selected, setSelected] = useState(new Set([""]));
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(data.role);
    const name = useRef()
    const username = useRef()
    const token = useRecoilValue(authAtom)

    const submitHandler = async (ev) => {
        setLoading(true);
        const id = toast.loading("Updating User...");
        try {
            const json = {
                fullname: !name.current ? data.fullname : name.current.value,
                username: !username.current ? data.username : username.current.value,
                user_outlet: !data.placement ? parseInt(selectedValue) : parseInt(data.placement),
                role: !checked ? data.role : checked
            };
            await putRequest(`api/nextlaundry/admin/user/${data.id_user}`, JSON.stringify(json), `Bearer ${token}`).then((res) => {
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
            window.location.reload();
        }
    }
    return (
        <>
            <Modal width='35%' open={visible} closeButton onClose={close} aria-labelledby="modal-add-member" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Add New
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        User
                    </Text>

                </Modal.Header>
                <form onSubmit={submitHandler}>
                    <Modal.Body>
                        <Input required labelLeft="Name" type="text" clearable fullWidth color='primary' size='lg' initialValue={data.fullname} ref={!name ? data.fullname : name} placeholder='type here...' />
                        <Spacer />
                        <Input required labelLeft="Username" type="text" clearable fullWidth color='primary' size='lg' initialValue={data.username} ref={!username ? data.username : username} placeholder='type here...' />
                        <Spacer />
                        <Dropdown css={{ minWidth: "100%", fontFamily: "Righteous" }} >
                            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                {selectedValue === "" ? data.user_outlet : selectedValue}
                            </Dropdown.Button>
                            <Dropdown.Menu

                                aria-label="Single selection actions"
                                color="secondary"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={!selected ? data.placement.id_outlet : selected}
                                onSelectionChange={setSelected}
                            >
                                {
                                    outlet.map((item) => (
                                        <Dropdown.Item key={item.id_outlet}>{item.nama_outlet}</Dropdown.Item>
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Radio.Group orientation='horizontal' label="Roles" value={!checked ? data.role : checked} onChange={setChecked} css={{ paddingLeft: "$2" }}>
                            <Radio isRequired value='admin'>Administrator</Radio>
                            <Radio isRequired value='kasir'>Cashier</Radio>
                            <Radio isRequired value='owner'>Owner</Radio>
                        </Radio.Group>

                    </Modal.Body>
                    <Modal.Footer>

                        <Button type='submit' color="secondary" isDisabled={loading}>Save The Data</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalEditUser