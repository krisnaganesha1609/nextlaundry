import { Button, Input, Modal, Radio, Spacer, Text } from '@nextui-org/react'
import { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { putRequest } from "../../../helper/axios-client";
import { toast } from "react-toastify";
import { authAtom } from "../../../logic/atoms/auth";
import { memberUpdatesAtom } from "../../../logic/atoms/details";

const ModalEditMember = ({visible, close}) => {
    const data = useRecoilValue(memberUpdatesAtom)
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(data.gender);
    const name = useRef()
    const address = useRef()
    const phone = useRef()
    const token = useRecoilValue(authAtom)

    const submitHandler = async () => {
        setLoading(true);
        const id = toast.loading("Updating Member...");
        try {
            const json = {
                member_name: !name.current ? data.member_name : name.current.value,
                member_address: !address.current ? data.member_address : address.current.value,
                member_phone: !phone.current ? data.member_phone : phone.current.value,
                gender: !checked ? data.role : checked
            };
            await putRequest(`api/nextlaundry/admin/member/${data.id_member}`, JSON.stringify(json), `Bearer ${token}`).then((res) => {
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
                        Member
                    </Text>

                </Modal.Header>
                <form onSubmit={submitHandler}>
                    <Modal.Body>
                    <Input required labelLeft="Name" type="text" clearable fullWidth color='primary' disabled={loading} size='lg' initialValue={data.member_name} ref={!name ? data.member_name : name} placeholder='type here...' />
                        <Spacer />
                        <Input required labelLeft="Address" type="text" clearable fullWidth color='primary' disabled={loading} size='lg' initialValue={data.member_address} ref={!address ? data.member_address : address} placeholder='type here...' />
                        <Spacer />
                        <Radio.Group isRequired orientation='horizontal' label="Gender" value={!checked ? data.gender : checked} onChange={setChecked} css={{ paddingLeft: "$2" }}>
                            <Radio value='L' isDisabled={loading}>Male</Radio>
                            <Radio value='P' isDisabled={loading}>Female</Radio>
                        </Radio.Group>
                        <Spacer />
                        <Input required labelLeft="Phone" type="text" clearable fullWidth color='primary' disabled={loading} size='lg' initialValue={data.member_phone} ref={!phone ? data.member_phone : phone} placeholder='type here...' />

                    </Modal.Body>
                    <Modal.Footer>

                        <Button type='submit' color="secondary" isDisabled={loading}>Save The Data</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalEditMember