import { Button, Modal, Spacer, Text } from '@nextui-org/react'
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { deleteRequest } from "../../../helper/axios-client";
import { toast } from "react-toastify";
import { authAtom } from "../../../logic/atoms/auth";
import { memberDeletesAtom } from "../../../logic/atoms/details";

const ModalDeleteMember = ({visible, close}) => {
    const data = useRecoilValue(memberDeletesAtom)
    const [loading, setLoading] = useState(false);
    const token = useRecoilValue(authAtom)

    const submitHandler = async (ev) => {
        setLoading(true);
        const id = toast.loading("Deleting Member...");
        try {
            const json = {
                ID: data.id_member
            };
            await deleteRequest(`api/nextlaundry/admin/member`, JSON.stringify(json), `Bearer ${token}`).then((res) => {
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
            <Modal width='35%' open={visible} closeButton onClose={close} aria-labelledby="modal-delete-user" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Confirm Delete
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        Member
                    </Text>

                </Modal.Header>
                <form onSubmit={submitHandler}>
                    <Modal.Body>
                        <Text css={{ fontFamily: "Righteous"}}>Are You Sure Want To Delete {data.member_name} ?</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit' color="error" isDisabled={loading}>Yes</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalDeleteMember