import { Table, Row, Col, Tooltip, User, Text, Card, Dropdown, Grid, Spacer, Button, Textarea } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadgeMember";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon"
import { userModel } from "../../../model/data/UserTableModel";
import { useState, useMemo } from "react";
import { desc, asc } from "../../../assets";
import { StyledBadgeUser } from "./StyledBadgeUser";

const UsersTable = () => {
    const [selected, setSelected] = useState(new Set(["Select What To Do"]));
    const [disabled, setDisabled] = useState(true);
    const [pressedAsc, onPressedAsc] = useState(false);
    const [pressedDesc, onPressedDesc] = useState(false);
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const columns = [
        { name: "ID", uid: "id" },
        { name: "Full Name", uid: "name" },
        { name: "Username", uid: "username" },
        { name: "Password", uid: "password" },
        { name: "Outlet", uid: "outlet" },
        { name: "Role", uid: "role" },
        { name: "Actions", uid: "actions" },
    ];
    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "id":
                return (
                    <Text b size={14}>{cellValue}</Text>
                );
            case "name":
                return (
                    <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
                    </User>
                );
            case "username":
                return (
                    <Text b size={14} css={{ tt: "capitalize" }}>
                        {cellValue}
                    </Text>
                );
            case "password":
                return <Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>;
            case "outlet":
                return <Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>;
            case "role":
                return <StyledBadgeUser type={user.role}>{cellValue}</StyledBadgeUser>;

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Details">
                                <IconButton onClick={() => console.log("View user", user.id)}>
                                    <EyeIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Edit user">
                                <IconButton onClick={() => console.log("Edit user", user.id)}>
                                    <EditIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Delete user"
                                color="error"
                                onClick={() => console.log("Delete user", user.id)}
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
                <Table.Body items={userModel} >
                    {(item) => (
                        <Table.Row>
                            {(columnKey) => (
                                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                            )}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </>

    )
}

export default UsersTable