import { Table, Row, Col, Tooltip, Text, Card, Grid, Spacer, Button, Textarea } from "@nextui-org/react";
import { StyledBadgeTransactionStatus, StyledBadgeTransactionPaidStatus } from "./StyledBadgeTransaction";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { useState, useEffect } from "react";
import { desc, asc } from "../../../assets";
import { useRecoilValue } from "recoil";
import { getRequest } from "../../../helper/axios-client";
import { authAtom } from "../../../logic/atoms/auth";
import { usersAtom } from "../../../logic/atoms/users";
import { generateInvoiceNumber } from "../../../helper/generate-invoice";
import { formatTimestamp } from "../../../helper/timestamp-formatter";

const TransactionTable = () => {
    const [pressedAsc, onPressedAsc] = useState(false);
    const [pressedDesc, onPressedDesc] = useState(false);
    const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)
    const [transactionModel, setTransactionModel] = useState([])
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const columns = [
        { name: "ID", uid: "id_transaction" },
        { name: "Invoice", uid: "invoice" },
        { name: "Transaction Date", uid: "date" },
        { name: "In", uid: "transaction_at" },
        { name: "Recipient", uid: "orderred_by" },
        { name: "Entrier", uid: "input_by" },
        { name: "Status", uid: "status" },
        { name: "Paid Status", uid: "paid_status" },
        { name: "Actions", uid: "actions" },
    ];
    const renderCell = (user, columnKey, at, member, inputter) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "id_transaction":
                return (
                    <Text b size={14}>{cellValue}</Text>
                );
            case "invoice":
                return <Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>;
            case "date":
                return <Text b size={14} css={{ tt: "capitalize" }}>{formatTimestamp(cellValue)}</Text>;
            case "transaction_at":
                return <Text b size={14} css={{ tt: "capitalize" }}>{at}</Text>;
            case "orderred_by":
                return <Text b size={14} css={{ tt: "capitalize" }}>{member}</Text>;
            case "input_by":
                return <Text b size={14} css={{ tt: "capitalize" }}>{inputter}</Text>;
            case "status":
                return <StyledBadgeTransactionStatus type={user.status}>{cellValue}</StyledBadgeTransactionStatus>;
            case "paid_status":
                return <StyledBadgeTransactionPaidStatus type={user.paid_status}>{cellValue}</StyledBadgeTransactionPaidStatus>;
            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Details">
                                <IconButton onClick={() => console.log("View transaction", user.id)}>
                                    <EyeIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Update">
                                <IconButton onClick={() => console.log("Edit transaction", user.id)}>
                                    <EditIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                );
            default:
                return cellValue;
        }
    };

    const handleGenerateInvoiceNumber = () => {
        const newInvoiceNumber = generateInvoiceNumber();
        setInvoiceNumber(newInvoiceNumber);
        console.log(invoiceNumber)
    };

    const transactionModelFetcher = async () => {

        if (user.role.toLowerCase() === "admin") {
            await getRequest("api/nextlaundry/admin/transactions", `Bearer ${token}`).then((res) => {
                const data = res.data.all_transactiondata

                const sameOutletOnly = data.filter((item) => item.id_outlet === user.user_outlet)
                setTransactionModel(sameOutletOnly)
                console.log(res.data.all_transactiondata)
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    useEffect(() => {
        transactionModelFetcher()
        const sameOutletOnly = transactionModel.filter((item) => item.id_outlet === user.id_outlet)
        setTransactionModel(sameOutletOnly)
    }, []);
    return (
        <>
            <div className="w-full">
                <Grid.Container css={{ p: 0, }}>
                    <Card css={{ $$cardColor: '$colors$primary', opacity: 0.8, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                        <Card.Body>
                            <Row align="center" justify="flex-start">
                                <Spacer />
                                <Grid>
                                    <Textarea width="300px" rows={1} css={{
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        height: "50%",
                                        fontFamily: "Righteous"
                                    }} placeholder="🔍 Search Data By Name Or ID" />
                                </Grid>
                                <Spacer />
                                <Grid>
                                    <Button auto color="success">Search</Button>
                                </Grid>
                                <Spacer />
                                <Grid>
                                    <Tooltip content={"Sort By Ascending"} color="secondary" css={{ fontFamily: "Righteous" }}>
                                        <Button auto onPress={() => { onPressedAsc(true); onPressedDesc(false); }} icon={<img src={asc} className={pressedAsc ? "opacity-100" : "opacity-25"} />} />
                                    </Tooltip>
                                </Grid>
                                <Spacer />
                                <Grid>
                                    <Tooltip content={"Sort By Descending"} color="secondary" css={{ fontFamily: "Righteous" }}>
                                        <Button auto onPress={() => { onPressedDesc(true); onPressedAsc(false); }} icon={<img src={desc} className={pressedDesc ? "opacity-100" : "opacity-25"} />} />
                                    </Tooltip>
                                </Grid>
                            </Row>

                        </Card.Body>
                    </Card>
                </Grid.Container>

            </div>

            <Table
                aria-label="Transaction Table"
                sticked
                containerCss={{
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0
                }}
                css={{
                    height: "auto",
                    minWidth: "100%",
                    fontFamily: "Righteous"
                }}
                selectionMode="single"

            >
                <Table.Pagination shadow
                    noMargin
                    align="center"
                    rowsPerPage={10}
                    onPageChange={(page) => console.log({ page })} />

                <Table.Header columns={columns} >
                    {(column) => (
                        <Table.Column
                            key={column.uid}
                            hideHeader={column.uid === "actions"}
                            align={column.uid === "actions" ? "center" : "start"}
                        >
                            {column.name}
                        </Table.Column>
                    )}
                </Table.Header>
                <Table.Body >
                    {transactionModel.map((item) => (
                        <Table.Row>
                            {(columnKey) => (
                                <Table.Cell>{renderCell(item, columnKey, item.transaction_at.nama_outlet, item.ordered_by.member_name, item.input_by.fullname)}
                                </Table.Cell>
                            )}

                        </Table.Row>

                    ))}
                </Table.Body>
            </Table>
        </>

    )
}

export default TransactionTable