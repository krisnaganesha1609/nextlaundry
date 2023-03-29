import { Table, Row, Col, Tooltip, User, Text, Card, Dropdown, Grid, Spacer, Button, Textarea } from "@nextui-org/react";
import { IconButton } from "./IconButton";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon"
import { useState, useMemo, useEffect } from "react";
import { desc, asc } from "../../../assets";
import { StyledBadgeProducts } from "./StyledBadgeProducts";
import { useRecoilValue, useRecoilState } from "recoil";
import { productUpdatesAtom, productDeletesAtom } from "../../../logic/atoms/details";
import { getRequest } from "../../../helper/axios-client";
import { authAtom } from "../../../logic/atoms/auth";
import { usersAtom } from "../../../logic/atoms/users";
import ModalDeletePackage from "./ModalDeletePackage";
import ModalEditPackage from "./ModalEditPackage";

const ProductsTable = () => {
    const [selected, setSelected] = useState(new Set(["Select What To Do"]));
    const [disabled, setDisabled] = useState(true);
    const [pressedAsc, onPressedAsc] = useState(false);
    const [pressedDesc, onPressedDesc] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const user = useRecoilValue(usersAtom)
    const token = useRecoilValue(authAtom)
    const [, setUpdate] = useRecoilState(productUpdatesAtom);
    const [, setDelete] = useRecoilState(productDeletesAtom);
    const [productModel, setProductModel] = useState([])
    const [outletModel, setOutletModel] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const columns = [
        { name: "ID", uid: "id_product" },
        { name: "Package Name", uid: "product_name" },
        { name: "Referenced Outlet", uid: "outlet" },
        { name: "Package Type", uid: "type" },
        { name: "Pricing", uid: "price" },
        { name: "Actions", uid: "actions" },
    ];
    const renderCell = (product, columnKey, outlet) => {
        const cellValue = product[columnKey];
        switch (columnKey) {
            case "id_product":
                return (
                    <Text b size={14}>{cellValue}</Text>
                );
            case "product_name":
                return (
                    <Text b size={14} css={{ tt: "capitalize" }}>
                        {cellValue}
                    </Text>
                );
            case "outlet":
                return (
                    <Text b size={14} css={{ tt: "capitalize" }}>
                        {outlet}
                    </Text>
                );
            case "price":
                return <Text b size={14} css={{ tt: "capitalize" }}>Rp.{cellValue}</Text>;
            case "type":
                return <StyledBadgeProducts type={product.type}>{cellValue}</StyledBadgeProducts>;
            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Edit Product">
                                <IconButton onClick={() => updateProductModelFetcher(product.id_product)}>
                                    <EditIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Delete Product"
                                color="error"
                                onClick={() => deleteProductModelFetcher(product.id_product)}
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
                console.log(res.data.outlet)
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    const productModelFetcher = async () => {

        if (user.role.toLowerCase() === "admin") {
            await getRequest("api/nextlaundry/admin/products", `Bearer ${token}`).then((res) => {
                setProductModel(res.data.products)
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    async function updateProductModelFetcher(userId) {

        if (user.role.toLowerCase() === "admin") {
            await getRequest(`api/nextlaundry/admin/products/${userId}`, `Bearer ${token}`).then((res) => {
                setUpdate(res.data.detailed_product)
                setVisible(true);
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }

    async function deleteProductModelFetcher(userId) {

        if (user.role.toLowerCase() === "admin") {
            await getRequest(`api/nextlaundry/admin/products/${userId}`, `Bearer ${token}`).then((res) => {
                setDelete(res.data.detailed_product)
                setVisible2(true);
            }).catch((error) => {
                console.log(error.response)
            })
        }

    }
    const sortAsc = () => {
        if (productModel) {
            let sortedData = productModel.sort((a, b) => a.id_product - b.id_product);
            setProductModel(sortedData)
        }
    }

    const sortDesc = () => {
        if (productModel) {
            let sortedData = productModel.sort((a, b) => b.id_product - a.id_product);
            setProductModel(sortedData)
        }

    }

    const searchs = (e) => {
        if (productModel) {
            const value = e.target.value.toLowerCase()

            const filtered = productModel.filter((item) => {
                return item.id_product.toString().includes(value) || item.product_name.toLowerCase().includes(value);
            }
            )
            setProductModel(filtered)
            setSearchValue(value)
            if (value === '') {
                productModelFetcher()
            }
        }


    }

    useEffect(() => {
        outletModelFetcher()
        productModelFetcher()
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
                                    }} placeholder="🔍 Search Data By Name Or ID" onChange={searchs} value={searchValue}/>
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
                aria-label="Products Table"
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
                    {productModel.map((item) => (
                        <Table.Row>
                            {(columnKey) => (
                                <Table.Cell>{renderCell(item, columnKey, item.outlet.nama_outlet)}</Table.Cell>
                            )}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <ModalEditPackage visible={visible} close={() => {setVisible(false); window.location.reload()}} outlet={outletModel}/>
            <ModalDeletePackage visible={visible2} close={() => {setVisible2(false); window.location.reload()}}/>
        </>

    )
}

export default ProductsTable