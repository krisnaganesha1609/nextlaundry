import { Button, Input, Modal, Radio, Spacer, Text } from '@nextui-org/react'

const ModalAddMember = ({ close, visible, save }) => {
    return (
        <>
            <Modal width='35%' open={visible} closeButton onClose={close} aria-labelledby="modal-add-member" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Add New
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        Member
                    </Text>

                </Modal.Header>
                <Modal.Body>
                    <Input labelLeft="Name" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                    <Spacer />
                    <Input labelLeft="Address" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                    <Spacer />
                    <Radio.Group orientation='horizontal' label="Gender" css={{ paddingLeft: "$2" }}>
                        <Radio value='L'>Male</Radio>
                        <Radio value='P'>Female</Radio>
                    </Radio.Group>
                    <Spacer />
                    <Input labelLeft="Phone" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />

                </Modal.Body>
                <Modal.Footer>
                    <Button onPress={save} color="secondary">Save The Data</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddMember