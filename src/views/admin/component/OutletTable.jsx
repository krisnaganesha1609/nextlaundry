import { Table, Row, Col, Tooltip, Text, Card, Dropdown, Grid, Spacer, Button, Textarea } from "@nextui-org/react";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon"
import { useState, useMemo, useEffect } from "react";
import { desc, asc } from "../../../assets";
import { useRecoilState, useRecoilValue } from "recoil";
import { getRequest } from "../../../helper/axios-client";
import { authAtom } from "../../../logic/atoms/auth";
import { outletDetailsAtom, outletUpdatesAtom, outletDeletesAtom } from "../../../logic/atoms/details";
import { usersAtom } from "../../../logic/atoms/users";
import ModalDeleteOutlet from "./ModalDeleteOutlet";
import ModalEditOutlet from "./ModalEditOutlet";
import ModalDetailOutlet from "./ModalDetailOutlet";

const OutletTable = () => {
    const [selected, setSelected] = useState(new Set(["Select What To Do"]));
    const [pressedAsc, onPressedAsc] = useState(false);
    const [pressedDesc, onPressedDesc] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [, setDetail] = useRecoilState(outletDetailsAtom)
    const [, setUpdate] = useRecoilState(outletUpdatesAtom);
    const [, setDelete] = useRecoilState(outletDeletesAtom);
    const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)
    const [outletModel, setOutletModel] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const columns = [
        { name: "ID", uid: "id_outlet" },
        { name: "Outlet Name", uid: "nama_outlet" },
        { name: "Phone Number", uid: "telepon" },
        { name: "Actions", uid: "actions" },
    ];
    const renderCell = (outlet, columnKey) => {
        const cellValue = outlet[columnKey];
        switch (columnKey) {
            case "id_outlet":
                return (
                    <Text b size={14}>{cellValue}</Text>
                );
            case "nama_outlet":
                return (
                    <Text b size={14} css={{ tt: "capitalize" }}>
                        {cellValue}
                    </Text>
                );
            case "telepon":
                return <Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>;

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Details">
                                <IconButton onClick={() => detailOutletModelFetcher(outlet.id_outlet)}>
                                    <EyeIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Edit Outlet">
                                <IconButton onClick={() => updateOutletModelFetcher(outlet.id_outlet)}>
                                    <EditIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Delete Outlet"
                                color="error"
                                onClick={() => deleteOutletModelFetcher(outlet.id_outlet)}
                            >
                                <IconButton>
                                    <DeleteIcon size={20} fill="#FF0080" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                );
            default:
                return cellValue;
        }
    };

    const outletModelFetcher = async () => {

        if (user.role.toLowerCase() === "admin") {
            await getRequest("api/nextlaundry/admin/outlets", `Bearer ${token}`).then((res) => {
                setOutletModel(res.data.outlet)
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    async function detailOutletModelFetcher(userId) {

        if (user.role.toLowerCase() === "admin") {
            await getRequest(`api/nextlaundry/admin/outlets/${userId}`, `Bearer ${token}`).then((res) => {
                setDetail(res.data.detailed_outlet)
                setVisible(true);
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    async function updateOutletModelFetcher(userId) {

        if (user.role.toLowerCase() === "admin") {
            await getRequest(`api/nextlaundry/admin/outlets/${userId}`, `Bearer ${token}`).then((res) => {
                setUpdate(res.data.detailed_outlet)
                setVisible2(true);
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    async function deleteOutletModelFetcher(userId) {

        if (user.role.toLowerCase() === "admin") {
            await getRequest(`api/nextlaundry/admin/outlets/${userId}`, `Bearer ${token}`).then((res) => {
                setDelete(res.data.detailed_outlet)
                setVisible3(true);
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    const sortAsc = () => {
        if (outletModel) {
            let sortedData = outletModel.sort((a, b) => a.id_outlet - b.id_outlet);
            setOutletModel(sortedData)
        }
    }

    const sortDesc = () => {
        if (outletModel) {
            let sortedData = outletModel.sort((a, b) => b.id_outlet - a.id_outlet);
            setOutletModel(sortedData)
        }

    }

    const searchs = (e) => {
        if (outletModel) {
            const value = e.target.value.toLowerCase()

            const filtered = outletModel.filter((item) => {
                return item.id_outlet.toString().includes(value) || item.nama_outlet.toLowerCase().includes(value);
            }
            )
            setOutletModel(filtered)
            setSearchValue(value)
            if (value === '') {
                outletModelFetcher()
            }
        }


    }

    useEffect(() => {
        outletModelFetcher()
    }, []);

    return (
        <>
            <div className="w-full">
                <Grid.Container css={{ p: 0, }}>
                    <Card css={{ $$cardColor: '$colors$primary', opacity: 0.8, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, }}>
                        <Card.Body>
                            <Row align="center" justify="flex-start">
                                <Spacer />
                                <Grid>
                                    <Textarea width="300px" rows={1} css={{
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        height: "50%",
                                        fontFamily: "Righteous"
                                    }} placeholder="🔍 Search Data By Name Or ID" onChange={searchs} value={searchValue}/>
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
                aria-label="Member Table"
                sticked
                containerCss={{
                    height: "auto",
                    minWidth: "100%",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0
                }}
                css={{
                    fontFamily: "Righteous",
                }}
                selectionMode="multiple"

                onSelectionChange={() => setDisabled(false)}

            >
                <Table.Pagination shadow
                    noMargin
                    align="center"
                    rowsPerPage={10}
                    onPageChange={(page) => console.log({ page })} />

                <Table.Header columns={columns}>
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
                    {outletModel.map((item) => (
                        <Table.Row>
                            {(columnKey) => (
                                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                            )}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <ModalDetailOutlet visible={visible} close={() => {setVisible(false); window.location.reload()}}/>
            <ModalEditOutlet visible={visible2} close={() => {setVisible2(false); window.location.reload()}} />
            <ModalDeleteOutlet visible={visible3} close={() => {setVisible3(false); window.location.reload()}} />
        </>

    )
}

export default OutletTable