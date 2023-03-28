import { Button, Input, Modal, Radio, Spacer, Text } from '@nextui-org/react'
import { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { putRequest } from "../../../helper/axios-client";
import { toast } from "react-toastify";
import { authAtom } from "../../../logic/atoms/auth";
import { outletUpdatesAtom } from "../../../logic/atoms/details";

const ModalEditOutlet = ({visible, close}) => {
    const data = useRecoilValue(outletUpdatesAtom)
    const [loading, setLoading] = useState(false);
    const name = useRef()
    const address = useRef()
    const phone = useRef()
    const token = useRecoilValue(authAtom)

    const submitHandler = async () => {
        setLoading(true);
        const id = toast.loading("Updating Outlet...");
        try {
            const json = {
                nama_outlet: !name.current ? data.nama_outlet : name.current.value,
                alamat: !address.current ? data.alamat : address.current.value,
                telepon: !phone.current ? data.telepon : phone.current.value,
            };
            await putRequest(`api/nextlaundry/admin/outlet/${data.id_outlet}`, JSON.stringify(json), `Bearer ${token}`).then((res) => {
                toast.update(id, {
                    render: res.data.message,
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                });
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
                        Edit
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        Outlet
                    </Text>

                </Modal.Header>
                <form onSubmit={submitHandler}>
                    <Modal.Body>
                    <Input required labelLeft="Name" type="text" clearable fullWidth color='primary' disabled={loading} size='lg' initialValue={data.nama_outlet} ref={!name ? data.nama_outlet : name} placeholder='type here...' />
                        <Spacer />
                        <Input required labelLeft="Address" type="text" clearable fullWidth color='primary' disabled={loading} size='lg' initialValue={data.alamat} ref={!address ? data.alamat : address} placeholder='type here...' />
                        <Spacer />
                        <Input required labelLeft="Phone" type="text" clearable fullWidth color='primary' disabled={loading} size='lg' initialValue={data.alamat} ref={!phone ? data.alamat : phone} placeholder='type here...' />

                    </Modal.Body>
                    <Modal.Footer>

                        <Button type='submit' color="secondary" isDisabled={loading}>Save The Data</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalEditOutlet