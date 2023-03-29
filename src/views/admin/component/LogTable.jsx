import { Table, Row, Tooltip, Grid, Text, Card, Spacer, Button, Textarea } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadgeMember";

import { LogModel } from "../../../model/data/LogTableModel";
import { useState, useEffect } from "react";
import { desc, asc } from "../../../assets";
import { useRecoilValue } from "recoil";
import { getRequest } from "../../../helper/axios-client";
import { authAtom } from "../../../logic/atoms/auth";
import { usersAtom } from "../../../logic/atoms/users";
import { formatTimestamp } from "../../../helper/timestamp-formatter";

const LogTable = () => {
    const [pressedAsc, onPressedAsc] = useState(false);
    const [pressedDesc, onPressedDesc] = useState(false);
    const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)
    const [logModel, setLogModel] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const columns = [
        { name: "ID", uid: "id_log" },
        { name: "Action Time", uid: "created_at" },
        { name: "History", uid: "log_history" },
        { name: "Category", uid: "log_type" },
    ];
    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "id_log":
                return <Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>;
            case "created_at":
                return <Text b size={14} css={{ tt: "capitalize" }}>{formatTimestamp(cellValue)}</Text>;
            case "log_history":
                return <Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>;
            case "log_type":
                return <Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>;

            default:
                return cellValue;
        }
    };

    const logModelFetcher = async () => {

        if (user.role.toLowerCase() === "admin") {
            await getRequest("api/nextlaundry/admin/logs", `Bearer ${token}`).then((res) => {
                setLogModel(res.data.log)
                console.log(res.data.log)
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    const sortAsc = () => {
        if (logModel) {
            let sortedData = logModel.sort((a, b) => a.id_log - b.id_log);
            setLogModel(sortedData)
        }
    }

    const sortDesc = () => {
        if (logModel) {
            let sortedData = logModel.sort((a, b) => b.id_log - a.id_log);
            setLogModel(sortedData)
        }

    }

    const searchs = (e) => {
        if (logModel) {
            const value = e.target.value.toLowerCase()

            const filtered = logModel.filter((item) => {
                return item.id_log.toString().includes(value) || item.log_history.toLowerCase().includes(value);
            }
            )
            setLogModel(filtered)
            setSearchValue(value)
            if (value === '') {
                logModelFetcher()
            }
        }


    }

    useEffect(() => {
        logModelFetcher()
    }, []);
    return (
        <>
            <div className="w-full">
                <Grid.Container css={{ p: 0, }}>
                    <Card css={{ $$cardColor: '$colors$primary', opacity: 0.8, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                        <Card.Body>
                            <Row align="center" justify="flex-start">
                                <Spacer/>
                                <Grid>
                                    <Textarea width="300px" rows={1} css={{
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        height: "50%",
                                        fontFamily: "Righteous"
                                    }} placeholder="🔍 Search Data By History Or ID" value={searchValue} onChange={searchs} />
                                </Grid>
                                <Spacer />
                                <Grid>
                                    <Button auto color="success">Search</Button>
                                </Grid>
                                <Spacer />
                                <Grid>
                                    <Tooltip content={"Sort By Ascending"} color="secondary" css={{ fontFamily: "Righteous" }}>
                                        <Button auto onPress={() => { onPressedAsc(true); onPressedDesc(false); sortAsc()}} icon={<img src={asc} className={pressedAsc ? "opacity-100" : "opacity-25"} />} />
                                    </Tooltip>
                                </Grid>
                                <Spacer />
                                <Grid>
                                    <Tooltip content={"Sort By Descending"} color="secondary" css={{ fontFamily: "Righteous" }}>
                                        <Button auto onPress={() => { onPressedDesc(true); onPressedAsc(false); sortDesc()}} icon={<img src={desc} className={pressedDesc ? "opacity-100" : "opacity-25"} />} />
                                    </Tooltip>
                                </Grid>
                            </Row>

                        </Card.Body>
                    </Card>
                </Grid.Container>
            </div>
            <Table
                aria-label="Log Table"
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
                <Table.Body items={LogModel} >
                    {logModel.map((item) => (
                        <Table.Row>
                            {(columnKey) => (
                                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                            )}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>

    )
}

export default LogTable