import { Button, Input, Modal, Spacer, Text, Dropdown, Grid, Card, Row, Divider } from '@nextui-org/react'
import { useState, useMemo, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../logic/atoms/auth";
import { usersAtom } from "../../../logic/atoms/users";
import { getRequest, postRequest } from "../../../helper/axios-client";

const ModalAddTransaction = ({ close, visible, save }) => {

    const json = {
        tr: "",
        produk: []
    }

    const produk = [
        {}, {}

    ];

    const [formValues, setFormValues] = useState([{ id_paket: "", qty: 1, desc: "" }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { id_paket: "", qty: 1, desc: "" }])
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

    const [invoiceNumber, setInvoiceNumber] = useState('');

    const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)
    const [outletModel, setOutletModel] = useState([])
    const [memberModel, setMemberModel] = useState([])
    const [productModel, setProductModel] = useState([])

    const modelFetcher = async () => {

        if (user.role.toLowerCase() === "admin") {
            await getRequest("api/nextlaundry/admin/outlets", `Bearer ${token}`).then((res) => {
                setOutletModel(res.data.outlet)
            }).catch((error) => {
                console.log(error.response)
            });
            await getRequest("api/nextlaundry/admin/members", `Bearer ${token}`).then((res) => {
                setMemberModel(res.data.members)
            }).catch((error) => {
                console.log(error.response)
            });
            await getRequest("api/nextlaundry/admin/products", `Bearer ${token}`).then((res) => {
                setProductModel(res.data.products)
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    const handleGenerateInvoiceNumber = () => {
        const newInvoiceNumber = generateInvoiceNumber();
        setInvoiceNumber(newInvoiceNumber);
        console.log(invoiceNumber)
    };

    useEffect(() => {
        modelFetcher();
    }, []);

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
                                            { memberModel.map((item) => (
                                                <Dropdown.Item key={item.id_member}>{item.member_name}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Spacer />
                                    <Dropdown css={{ minWidth: "100%", fontFamily: "Righteous"}} >
                                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize"}} >
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
                                            {outletModel.map((item) => (
                                                <Dropdown.Item key={item.id_outlet}>{item.nama_outlet}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Spacer />
                                    <Input labelLeft="Est. Finish" type="datetime-local" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
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
                                    <Input labelLeft="Tax" type="" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Spacer />
                                    <Input labelLeft="Charge" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Spacer />
                                    <Input labelLeft="Discount" labelRight="%" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Spacer />
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
                                                    <select
                                                        value={element.id_paket}
                                                        onChange={(event) => {
                                                            const newFormValues = [...formValues];
                                                            newFormValues[index] = { ...newFormValues[index], id_paket: event.target.value };
                                                            setFormValues(newFormValues);
                                                        }}
                                                        className={`block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500`}
                                                    >
                                                        
                                                        <option value="">Choose Detail Package</option>
                                                        {productModel.map((item) => (
                                                            <option value={item.id}>Package Name: {item.product_name} --- Type: {item.type.toUpperCase()}</option>
                                                        ))}
                                                    </select>
                                                    <Spacer />
                                                    <Row justify='center'>
                                                        <Input labelLeft="Qty" name='qty' type="number" color='primary' value={element.qty || 1} onChange={e => handleChange(index, e)} size='lg' placeholder='type here...' />
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