import { Button, Input, Modal, Spacer, Text, Dropdown, Grid, Card } from '@nextui-org/react'
import { useState, useMemo } from "react";

const ModalAddTransaction = ({ close, visible, save }) => {
    const [selectedTipe, setSelectedTipe] = useState(new Set(["Member Name"]));
    const selectedTipes = useMemo(
        () => Array.from(selectedTipe).join(", ").replaceAll("_", " "),
        [selectedTipe]
    );
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
    const [selectedTransaction, setSelectedTransaction] = useState(new Set(["Payment Methods"]));
    const selectedTransactions = useMemo(
        () => Array.from(selectedTransaction).join(", ").replaceAll("_", " "),
        [selectedType]
    );
    const [selectedStat, setSelectedStat] = useState(new Set(["Trannsaction Status"]));
    const selectedStats = useMemo(
        () => Array.from(selectedStat).join(", ").replaceAll("_", " "),
        [selectedType]
    );

    return (
        <>
            <Modal fullScreen open={visible} closeButton onClose={close} aria-labelledby="modal-add-member" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Add New
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        Transaction
                    </Text>

                </Modal.Header>
                <Modal.Body>
                    <Grid.Container>
                        <Grid md>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text css={{ fontFamily: "Righteous"}}>General Info</Text>
                                    <Dropdown css={{ minWidth: "50%", fontFamily: "Righteous" }}>
                                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                            {selectedTipes}
                                        </Dropdown.Button>
                                        <Dropdown.Menu
                                            aria-label="single selection actions"
                                            color="secondary"
                                            disallowEmptySelection
                                            selectionMode="single"
                                            selectedKeys={selectedTipe}
                                            onSelectionChange={setSelectedTipe}
                                        >
                                            <Dropdown.Item key="Chris Marnocha">Chris Marnocha</Dropdown.Item>
                                            <Dropdown.Item key="Asep">Asep</Dropdown.Item>
                                            <Dropdown.Item key="Blekk">Blekk</Dropdown.Item>
                                            <Dropdown.Item key="Bakekok">Bakekok</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
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
                                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Spacer />
                        <Grid md>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text css={{ fontFamily: "Righteous" }}>General Info</Text>
                                    <Dropdown css={{ minWidth: "50%", fontFamily: "Righteous" }}>
                                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                            {selectedTipes}
                                        </Dropdown.Button>
                                        <Dropdown.Menu
                                            aria-label="single selection actions"
                                            color="secondary"
                                            disallowEmptySelection
                                            selectionMode="single"
                                            selectedKeys={selectedTipe}
                                            onSelectionChange={setSelectedTipe}
                                        >
                                            <Dropdown.Item key="Chris Marnocha">Chris Marnocha</Dropdown.Item>
                                            <Dropdown.Item key="Asep">Asep</Dropdown.Item>
                                            <Dropdown.Item key="Blekk">Blekk</Dropdown.Item>
                                            <Dropdown.Item key="Bakekok">Bakekok</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                </Card.Body>
                            </Card>

                        </Grid>
                        <Grid xs>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text css={{ fontFamily: "Righteous" }}>General Info</Text>
                                    <Dropdown css={{ minWidth: "50%", fontFamily: "Righteous" }}>
                                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                            {selectedTipes}
                                        </Dropdown.Button>
                                        <Dropdown.Menu
                                            aria-label="single selection actions"
                                            color="secondary"
                                            disallowEmptySelection
                                            selectionMode="single"
                                            selectedKeys={selectedTipe}
                                            onSelectionChange={setSelectedTipe}
                                        >
                                            <Dropdown.Item key="Chris Marnocha">Chris Marnocha</Dropdown.Item>
                                            <Dropdown.Item key="Asep">Asep</Dropdown.Item>
                                            <Dropdown.Item key="Blekk">Blekk</Dropdown.Item>
                                            <Dropdown.Item key="Bakekok">Bakekok</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>
                    

                    <Input labelLeft="Id" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                    <Input labelLeft="Date" type="Date" clearable fullWidth color='primary' size='lg' placeholder='type here...' />

                    <Dropdown css={{ minWidth: "100%", fontFamily: "Righteous" }} >
                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                            {selectedStats}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="secondary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedStat}
                            onSelectionChange={setSelectedStat}
                        >
                            <Dropdown.Item key="Done">Done</Dropdown.Item>
                            <Dropdown.Item key="Pending">Pending</Dropdown.Item>
                            <Dropdown.Item key="Deleted">Deleted</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

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
                            <Dropdown.Item key="Kilos">Kilos</Dropdown.Item>
                            <Dropdown.Item key="Blanket">Blanket</Dropdown.Item>
                            <Dropdown.Item key="Bed Cover">Bed Cover</Dropdown.Item>
                            <Dropdown.Item key="T-Shirt">T-Shirt</Dropdown.Item>
                            <Dropdown.Item key="Other">Other</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown css={{ minWidth: "100%", fontFamily: "Righteous" }}>
                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                            {selectedTransactions}
                        </Dropdown.Button>
                        <Dropdown.Menu

                            aria-label="single selection actions"
                            color="secondary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedTransaction}
                            onSelectionChange={setSelectedTransaction}
                        >
                            <Dropdown.Item key="Cash">Cash</Dropdown.Item>
                            <Dropdown.Item key="M-Banking">M-Banking</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Input labelRight="Kilograms" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onPress={save} color="secondary">Save The Data</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddTransaction