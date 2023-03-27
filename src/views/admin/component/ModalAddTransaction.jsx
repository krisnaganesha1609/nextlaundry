import { Button, Input, Modal, Spacer, Text, Dropdown, Grid, Card, Row, Divider } from '@nextui-org/react'
import { useState, useMemo } from "react";

const ModalAddTransaction = ({ close, visible, save }) => {

    const json = {
        tr: "",
        produk: []
    }

    const produk = [
        {},{}

    ];

    const [formValues, setFormValues] = useState([{id_paket: "", qty: "", desc : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmitDetail = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    const temp = []

    const [selectMember, setselectMember] = useState(new Set(["Member Name"]));
    const selectMembers = useMemo(
        () => Array.from(selectMember).join(", ").replaceAll("_", " "),
        [selectMember]
    );
    const [selected, setSelected] = useState(new Set(["Outlet Placement "]));
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const [selectPackage, setselectPackage] = useState(new Set(["Package Type"]));
    const selectPackages = useMemo(
        () => Array.from(selectPackage).join(", ").replaceAll("_", " "),
        [selectPackage]
    );
    const [selectEntrier, setselectEntrier] = useState(new Set(["Entrier"]));
    const selectEntriers = useMemo(
        () => Array.from(selectEntrier).join(", ").replaceAll("_", " "),
        [selectEntrier]
    );
    const [selectedStat, setSelectedStat] = useState(new Set(["Transaction Status"]));
    const selectedStats = useMemo(
        () => Array.from(selectedStat).join(", ").replaceAll("_", " "),
        [selectedStat]
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
                                    <Text css={{ fontFamily: "Righteous" }}>General Info</Text>
                                    <Spacer />
                                    <Dropdown css={{ minWidth: "50%", fontFamily: "Righteous" }}>
                                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                            {selectMembers}
                                        </Dropdown.Button>
                                        <Dropdown.Menu
                                            aria-label="single selection actions"
                                            color="secondary"
                                            disallowEmptySelection
                                            selectionMode="single"
                                            selectedKeys={selectMember}
                                            onSelectionChange={setselectMember}
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
                                    <Spacer />
                                    <Input labelLeft="Paid Deadline" type="Date" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Spacer />

                        <Spacer />
                        <Grid xs>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text css={{ fontFamily: "Righteous" }}>Additional Info</Text>
                                    <Spacer />
                                    <Input labelLeft="Tax" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Spacer />
                                    <Input labelLeft="Charge" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Spacer />
                                    <Dropdown css={{ minWidth: "50%", fontFamily: "Righteous" }}>
                                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                            {selectEntriers}
                                        </Dropdown.Button>
                                        <Dropdown.Menu
                                            aria-label="single selection actions"
                                            color="secondary"
                                            disallowEmptySelection
                                            selectionMode="single"
                                            selectedKeys={selectEntrier}
                                            onSelectionChange={setselectEntrier}
                                        >
                                            <Dropdown.Item key="Chris Marnocha">Chris Marnocha</Dropdown.Item>
                                            <Dropdown.Item key="Asep">Asep</Dropdown.Item>
                                            <Dropdown.Item key="Blekk">Blekk</Dropdown.Item>
                                            <Dropdown.Item key="Bakekok">Bakekok</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>
                    <Spacer />
                    <Grid.Container>
                        <Grid md>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Row>
                                        <Text css={{ fontFamily: "Righteous" }}>Transaction Details</Text>
                                        <Spacer />
                                        <Button type="button" onClick={() => addFormFields()}>Add More Details</Button>
                                    </Row>
                                    <form >
                                        {
                                            formValues.map((element, index) => (
                                                <div key={index}>
                                                    <Spacer />
                                                    <Dropdown css={{ width: "50%", fontFamily: "Righteous" }}>
                                                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} >
                                                            {element.id_paket || selectPackages}
                                                        </Dropdown.Button>
                                                        <Dropdown.Menu
                                                            aria-label="single selection actions"
                                                            color="secondary"
                                                            disallowEmptySelection
                                                            selectionMode="single"
                                                            selectedKeys={selectPackage}
                                                            onSelectionChange={setselectPackage}
                                                        >
                                                            <Dropdown.Item key="Chris Marnocha">Chris Marnocha</Dropdown.Item>
                                                            <Dropdown.Item key="Asep">Asep</Dropdown.Item>
                                                            <Dropdown.Item key="Blekk">Blekk</Dropdown.Item>
                                                            <Dropdown.Item key="Bakekok">Bakekok</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <Spacer />
                                                    <Row justify='center'>
                                                    <Input labelLeft="Qty" name='qty' type="number" color='primary' value={element.qty || 0} onChange={e => handleChange(index, e)} size='lg' placeholder='type here...' />
                                                    <Spacer />
                                                    <Input labelLeft="Desc" name='desc' fullWidth type="text" clearable color='primary' value={element.desc || ""} onChange={e => handleChange(index, e)} size='lg' placeholder='type here...' />
                                                    </Row>
                                                    <Spacer />
                                                    {
                                                        index ?
                                                        <Button color="error" type="button" onClick={() => removeFormFields(index)}>Remove Details</Button>
                                                        : null
                                                    }
                                                    <Spacer />
                                                    <Divider height={4} color="secondary" />
                                                    
                                                </div>
                                            ))
                                        }
                                    </form>
                                </Card.Body>
                            </Card>

                        </Grid>
                    </Grid.Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button onPress={save} color="secondary">Save The Data</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddTransaction