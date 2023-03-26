import { Button, Input, Modal, Spacer, Text } from '@nextui-org/react'
import { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import { postRequest } from "../../../helper/axios-client";
import { toast } from "react-toastify";
import { authAtom } from "../../../logic/atoms/auth";

const ModalAddOutlet = ({ close, visible, save }) => {
    const [loading, setLoading] = useState(false);
    const name = useRef()
    const address = useRef()
    const phone = useRef()
    // const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)

    const submitHandler = async (ev) => {
        ev.preventDefault()
        setLoading(true);
        const id = toast.loading("Adding New Outlet...");
        try {
            const json = {
                id_outlet: null,
                nama_outlet: name.current.value,
                alamat: address.current.value,
                telepon: phone.current.value,
                total_emp: 0
            };
            await postRequest("api/nextlaundry/admin/outlet", JSON.stringify(json), `Bearer ${token}`).then((res) => {
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
    return (
        <>
            <Modal width='35%' preventClose open={visible} closeButton onClose={close} aria-labelledby="modal-add-outlet" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Add New
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        Outlet
                    </Text>

                </Modal.Header>
                <form onSubmit={submitHandler}>
                    <Modal.Body>
                        <Input required labelLeft="Outlet" type="text" clearable fullWidth color='primary' size='lg' disabled={loading} ref={name} placeholder='type here...' />
                        <Spacer />
                        <Input required labelLeft="Address" type="text" clearable fullWidth color='primary' size='lg' disabled={loading} ref={address} placeholder='type here...' />
                        <Spacer />
                        <Input required labelLeft="Phone" type="text" clearable fullWidth color='primary' size='lg' disabled={loading} ref={phone} placeholder='type here...' />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit' color="secondary" isDisabled={loading}>Save The Data</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalAddOutlet