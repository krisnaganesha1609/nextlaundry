import { Table, Row, Col, Tooltip, Text, Card, Dropdown, Grid, Spacer, Button, Textarea, Loading } from "@nextui-org/react";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon"
import { useState, useMemo, useEffect } from "react";
import { desc, asc} from "../../../assets";
import { useRecoilValue } from "recoil";
import { getRequest } from "../../../helper/axios-client";
import { authAtom } from "../../../logic/atoms/auth";
import { usersAtom } from "../../../logic/atoms/users";
import ModalDetailUser from "./ModalDetailUser";

const MemberTable = () => {
    const [selected, setSelected] = useState(new Set(["Select What To Do"]));
    const [visible, setVisible] = useState(false);
    const close = () => setVisible(false);
    
    const [disabled, setDisabled] = useState(true);
    const [pressedAsc, onPressedAsc] = useState(false);
    const [pressedDesc, onPressedDesc] = useState(false);
    const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)
    const [memberModel, setMemberModel] = useState([])
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const columns = [
        { name: "ID", uid: "id_member" },
        { name: "Member Name", uid: "member_name" },
        { name: "Address", uid: "member_address" },
        { name: "Gender", uid: "gender" },
        { name: "Phone Number", uid: "member_phone" },
        { name: "Actions", uid: "actions" },
    ];
    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "id_member":
                return (
                    <Text b size={14}>{cellValue}</Text>
                );
            case "member_name":
                return (
                    <Text b size={14}>{cellValue}</Text>
                );
            case "member_address":
                return (
                    <Text b size={14} css={{ tt: "capitalize" }}>
                        {cellValue}
                    </Text>
                );
            case "gender":
                return <Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>;
            case "member_phone":
                return <Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>;

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Details">
                                <IconButton onClick={() => setVisible(true)}>
                                    <EyeIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Edit member">
                                <IconButton onClick={() => console.log("Edit member", user.id_member)}>
                                    <EditIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Delete member"
                                color="error"
                                onClick={() => console.log("Delete user", user.id_member)}
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

    const memberModelFetcher = async () => {

        if (user.role.toLowerCase() === "admin") {
            await getRequest("api/nextlaundry/admin/members", `Bearer ${token}`).then((res) => {
                setMemberModel(res.data.members)
                console.log(res.data.members)
            }).catch((error) => {
                console.log(error.response)
            })
        }

    } 

    useEffect(() => {
        memberModelFetcher()
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
                                    <Text size={15} color="white" css={{ m: 0, fontFamily: "Righteous" }}>
                                        What To Do With Selected Data?
                                    </Text>

                                </Grid>
                                <Spacer />
                                <Grid>
                                    <Dropdown css={{ minWidth: "100%", fontFamily: "Righteous" }} isDisabled={disabled}>
                                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} isDisabled={disabled}>
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
                                            <Dropdown.Item key="dispatch">Dispatch Selected Data</Dropdown.Item>
                                            <Dropdown.Item key="export">Export Selected Data</Dropdown.Item>
                                            <Dropdown.Item key="delete" withDivider color="error">Delete Selected Data</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Grid>
                                <Spacer />
                                <Grid >
                                    <Button disabled={selectedValue == "Select What To Do"} auto color="success">GO</Button>
                                </Grid>
                                <Spacer />
                                 <Grid>
                                    <Textarea width="300px" rows={1} css={{
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        height: "50%",
                                        fontFamily: "Righteous"
                                    }} placeholder="🔍 Search Data By Name Or ID"/>
                                 </Grid>
                                 <Spacer />
                                 <Grid>
                                    <Button auto color="success">Search</Button>
                                 </Grid>
                                 <Spacer />
                                 <Grid>
                                    <Tooltip content={"Sort By Ascending"} color="secondary" css={{ fontFamily: "Righteous" }}>
                                        <Button auto onPress={() => { onPressedAsc(true); onPressedDesc(false);}} icon={<img src={asc} className={pressedAsc ? "opacity-100" : "opacity-25" } />}/>
                                    </Tooltip>
                                 </Grid>
                                 <Spacer />
                                <Grid>
                                    <Tooltip content={"Sort By Descending"} color="secondary" css={{fontFamily: "Righteous"}}>
                                        <Button auto onPress={() => { onPressedDesc(true); onPressedAsc(false); }} icon={<img src={desc} className={pressedDesc ? "opacity-100" : "opacity-25"} />}/>
                                    </Tooltip>
                                </Grid>
                            </Row>

                        </Card.Body>
                    </Card>
                </Grid.Container>
            </div>
            {memberModel === [] ? <Loading type="points-opacity" size="md">Fetching data...</Loading> : <Table
                aria-label="Member Table"
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
                selectionMode="multiple"

                onSelectionChange={() => setDisabled(false)}

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
                    {memberModel.map((item) => (
                        <Table.Row>
                            {(columnKey) => (
                                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                            )}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>} 
            
            
        </>

    )
}

export default MemberTable