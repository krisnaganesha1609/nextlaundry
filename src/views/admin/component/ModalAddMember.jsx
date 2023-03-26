import { Button, Input, Modal, Radio, Spacer, Text } from '@nextui-org/react'
import { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import { postRequest } from "../../../helper/axios-client";
import { toast } from "react-toastify";
import { authAtom } from "../../../logic/atoms/auth";
// import { usersAtom } from "../../../logic/atoms/users";

const ModalAddMember = ({ close, visible, save }) => {
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState('');
    const name = useRef()
    const address = useRef()
    const phone = useRef()
    // const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)

    const submitHandler = async (ev) => {
        ev.preventDefault()
        setLoading(true);
        const id = toast.loading("Adding New Member...");
        try {
            const json = {
                id_member: null,
                member_name: name.current.value,
                member_address: address.current.value,
                gender: checked,
                member_phone: phone.current.value,
            };
            await postRequest("api/nextlaundry/admin/member", JSON.stringify(json), `Bearer ${token}`).then((res) => {
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
            <Modal width='35%' preventClose open={visible} closeButton onClose={close} aria-labelledby="modal-add-member" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Add New
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        Member
                    </Text>
                </Modal.Header>
                <form onSubmit={submitHandler}>
                    <Modal.Body>
                        
                        <Input required labelLeft="Name" type="text" clearable fullWidth color='primary' disabled={loading} size='lg' ref={name} placeholder='type here...' />
                        <Spacer />
                        <Input required labelLeft="Address" type="text" clearable fullWidth color='primary' disabled={loading} size='lg' ref={address} placeholder='type here...' />
                        <Spacer />
                        <Radio.Group isRequired orientation='horizontal' label="Gender" value={checked} onChange={setChecked} css={{ paddingLeft: "$2" }}>
                            <Radio value='L' isDisabled={loading}>Male</Radio>
                            <Radio value='P' isDisabled={loading}>Female</Radio>
                        </Radio.Group>
                        <Spacer />
                        <Input required labelLeft="Phone" type="text" clearable fullWidth color='primary' disabled={loading} size='lg' ref={phone} placeholder='type here...' />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit' color="secondary" isDisabled={loading}>Save The Data</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalAddMember