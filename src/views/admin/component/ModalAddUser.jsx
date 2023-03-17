import { Button, Input, Modal, Radio, Spacer, Text, Dropdown } from '@nextui-org/react'
import { useState, useMemo } from "react";

const ModalAddUser = ({ close, visible, save }) => {
    const [selected, setSelected] = useState(new Set(["Outlet Placement "]));
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
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
                <Modal.Body>
                    <Input labelLeft="Name" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                    <Spacer />
                    <Input labelLeft="Username" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                    <Spacer />
                    <Input labelLeft="Password" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                    <Spacer />
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
                            <Dropdown.Item key="Next Bandung">Next Bandung</Dropdown.Item>
                            <Dropdown.Item key="Next Sukabumi">Next Sukabumi</Dropdown.Item>
                            <Dropdown.Item key="Next Garut">Next Garut</Dropdown.Item>
                            <Dropdown.Item key="Next Jakarta">Next Jakarta</Dropdown.Item>
                            <Dropdown.Item key="Next Karawang">Next Karawang</Dropdown.Item>
                            <Dropdown.Item key="Next Bogor">Next Bogor</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Radio.Group orientation='horizontal' label="Roles" css={{ paddingLeft: "$2" }}>
                        <Radio value='admin'>Administrator</Radio>
                        <Radio value='kasir'>Cashier</Radio>
                        <Radio value='owner'>Owner</Radio>
                    </Radio.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button onPress={save} color="secondary">Save The Data</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddUser