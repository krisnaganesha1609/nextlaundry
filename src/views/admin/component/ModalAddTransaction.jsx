import { Button, Input, Modal, Spacer, Text, Dropdown, Grid, Card, Row, Divider, Col } from '@nextui-org/react'
import { useState, useMemo, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../logic/atoms/auth";
import { usersAtom } from "../../../logic/atoms/users";
import { getRequest, postRequest } from "../../../helper/axios-client";
import { generateInvoiceNumber } from '../../../helper/generate-invoice';
import { toast } from 'react-toastify';

const ModalAddTransaction = ({ close, visible }) => {
    const deadline = useRef();
    const tax = useRef();
    const discount = useRef();
    const addons = useRef();
    const [ids, setId] = useState("");
    

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

    

    const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)
    const [outletModel, setOutletModel] = useState([])
    const [memberModel, setMemberModel] = useState([])
    const [productModel, setProductModel] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false);

    const transaction = {
        id_outlet: !selectedValue ? "" : parseInt(selectedValue),
        invoice: generateInvoiceNumber(),
        member_id: !selectMembers ? "" : parseInt(selectMembers),
        date: new Date(),
        deadline: !deadline.current ? "" : new Date(deadline.current.value) ,
        tax: !tax.current ? "" : parseInt(tax.current.value),
        discount: !discount.current ? "" : parseFloat(discount.current.value),
        biaya_tambahan: !addons.current ? "" : parseInt(addons.current.value),
        inputter_id: user.id_user,
        status: "baru",
        paid_status: "belum_dibayar"
    }

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

    const handleSubmitDetail = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const id = toast.loading("Adding New Transaction...");
        try {
            const response = await postRequest("api/nextlaundry/admin/transaction", JSON.stringify(transaction), `Bearer ${token}`);
            if (response.status === 200) {
                setId(response.data.id_transaksi);
                console.log(ids)
            } else {
                throw new Error("Error creating transaction");
            }
        } catch (err) {
            { close }
            toast.update(id, {
                render: "Error Happened. Try Again Later!",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
            console.error(err);
            setIsSubmitting(false);
            return;
        }
    }

    useEffect(() => {
        modelFetcher();
        if (ids !== "" && formValues.length > 0) {
            const id = toast.loading("Adding New Transaction...");
            postRequest("api/nextlaundry/admin/detail", JSON.stringify(formValues), `Bearer ${token}`).then((res) => {
                { close }
                toast.update(id, {
                    render: "New Transaction Added!",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                });
                setIsSubmitting(false);
            }).catch((err) => {
                { close }
                toast.update(id, {
                    render: "We Got Error At Detail!",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
                console.error(err);
                setIsSubmitting(false);
            });
        }
    }, [ids]);

    const [formValues, setFormValues] = useState([{ transaction_id: parseInt(ids), id_paket: "", qty: 1, description: "" }])


    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { transaction_id: parseInt(ids), id_paket: "", qty: 1, description: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    return (
        
            <Modal fullScreen open={visible} closeButton onClose={close} aria-labelledby="modal-add-transaction" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Add New
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        Transaction
                    </Text>
                    <Spacer />
                </Modal.Header>
                    <Modal.Body>
                <form onSubmit={handleSubmitDetail}>
                    <Grid.Container>
                        <Grid xs={6}>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={'$2xl'} css={{ fontFamily: "Righteous" }}>General Info</Text>
                                    <Spacer />
                                    <Dropdown css={{ minWidth: "50%", fontFamily: "Righteous" }}>
                                        <Dropdown.Button flat color="default" css={{ tt: "capitalize" }} >
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
                                        <Dropdown.Button flat color="success" css={{ tt: "capitalize"}} >
                                            {selectedValue}
                                        </Dropdown.Button>
                                        <Dropdown.Menu
                                            aria-label="Single selection actions"
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
                                    <Input required ref={deadline} labelLeft="Due" type="datetime-local" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Spacer />
                        <Grid xs>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={'$2xl'} css={{ fontFamily: "Righteous" }}>Additional Info</Text>
                                    <Spacer />
                                    <Input ref={tax} required labelLeft="Tax" type="number" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Spacer />
                                    <Input ref={addons} required labelLeft="Charge" type="number" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Spacer />
                                    <Input ref={discount} required labelLeft="Discount" labelRight="%" type="number" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                                    <Spacer />
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Spacer />
                        <Grid sm css={{ alignItems: "end"}}> 
                                    {/* <Text css={{ fontFamily: "Righteous" }}>Subtotal</Text>
                                    <Spacer />
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous", }}>Rp.{}</Text>
                                    <Spacer /> */}
                                    <Button type='submit' css={{width: "100%"}} color="secondary">Save The Data</Button>
                        </Grid>
                    </Grid.Container>
                    <Spacer />
                    <Grid.Container>
                        <Grid md>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Row>
                                        <Text size={'$2xl'} css={{ fontFamily: "Righteous" }}>Transaction Details</Text>
                                        <Spacer />
                                        <Button type="button" onClick={() => addFormFields()}>Add More Details</Button>
                                    </Row>
                                        {
                                            formValues.map((element, index) => (
                                                <div key={index}>
                                                    <Spacer />
                                                    <select
                                                        value={parseInt(element.id_paket)}
                                                        onChange={(event) => {
                                                            const newFormValues = [...formValues];
                                                            newFormValues[index] = { ...newFormValues[index], id_paket: parseInt(event.target.value) };
                                                            setFormValues(newFormValues);
                                                        }}
                                                        className={`block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500`}
                                                    >
                                                        
                                                        <option value="">Choose Detail Package</option>
                                                        {productModel.map((item) => (
                                                            <option value={item.id_product}>{item.id_product}</option>
                                                        ))}
                                                    </select>
                                                    <Spacer />
                                                    <Row justify='center'>
                                                        <Input required labelLeft="Qty" name='qty' type="number" color='primary' value={element.qty || 1} onChange={e => handleChange(index, e)} size='lg' placeholder='type here...' />
                                                        <Spacer />
                                                        <Input required labelLeft="Desc" name='description' fullWidth type="text" clearable color='primary' value={element.description || ""} onChange={e => handleChange(index, e)} size='lg' placeholder='type here...' />
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
                                </Card.Body>
                            </Card>

                        </Grid>
                    </Grid.Container>
                </form>
                    </Modal.Body>
      
            </Modal>
        
    )
}

export default ModalAddTransaction