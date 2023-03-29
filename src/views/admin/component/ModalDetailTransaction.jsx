import { Modal, Spacer, Text, Grid, Card, Row, Divider } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { transactionDetailsAtom } from '../../../logic/atoms/details';

const ModalDetailTransaction = ({ visible, close }) => {
    const data = useRecoilValue(transactionDetailsAtom)
    const [product, setProduct] = useState(false)
    const [transaction, setTransaction] = useState(false)
    useEffect(() => {
        console.log("datazzzzzz: ", data)
        setTransaction(data[0]['transactions'])
        var temp = []
        data.map((item) => {
            // setProduct(item.products)
            temp.push(item.products)
        })
        setProduct(temp)
    }, [data])
    return (
        <>

            {transaction && product && (
                <>
                    <Modal fullScreen open={visible} closeButton onClose={close} aria-labelledby="modal-add-member" css={{ fontFamily: "Righteous" }}>
                        <Modal.Header>
                            <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                                Transaction
                            </Text>
                            <Spacer x={0.35} />
                            <Text b size={24} color="secondary">
                                Details
                            </Text>
                            <Spacer />

                        </Modal.Header>
                        <Modal.Body>
                            <Grid.Container>
                                <Grid md>
                                    <Card css={{ border: 1 }}>
                                        <Card.Body>
                                            <Text css={{ fontFamily: "Righteous" }}>General Info</Text>
                                            <Spacer />
                                            <Row>
                                                {/* //IMPLEMENT MEMBER NAME */}
                                                {transaction.ordered_by['member_name']}
                                            </Row>
                                            <Spacer />
                                            <Row>
                                                {/* //IMPLEMENT OUTLET NAME */}
                                                {transaction.transaction_at['nama_outlet']}
                                            </Row>
                                            <Spacer />
                                            <Row>
                                                {/* //IMPLEMENT ESTIMATED FINISH DATE */}
                                                {transaction.deadline}

                                            </Row>
                                            <Spacer />
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
                                            <Row>
                                                {/* //IMPLEMENT TAX */}
                                                {transaction.tax}
                                            </Row>
                                            <Spacer />
                                            <Row>
                                                {/* //IMPLEMENT CHARGE */}

                                                {transaction.biaya_tambahan}
                                            </Row>
                                            <Spacer />
                                            <Row>
                                                {/* //IMPLEMENT DISCOUNT */}

                                                {transaction.discount}%
                                            </Row>
                                            <Spacer />
                                        </Card.Body>
                                    </Card>
                                </Grid>
                            </Grid.Container>
                            <Spacer />
                            <Grid.Container>
                                {
                                    product.map((item) => (
                                        <Grid md>
                                            <Card css={{ border: 1 }}>
                                                <Card.Body>
                                                    <Row>
                                                        <Text css={{ fontFamily: "Righteous" }}>Order Details</Text>
                                                        <Spacer />
                                                    </Row>
                                                    {/* //PACKAGE ORDER PARENT */}
                                                    {item.product_name}
                                                    <Spacer />
                                                    <Row>
                                                        {/* //IMPLEMENT PACKAGE ORDER */}
                                                        Tipe: {item.type}

                                                    </Row>
                                                    <Spacer />
                                                    <Row justify='center'>
                                                        {/* //IMPLEMENT PACKAGE */}
                                                        Rp {item.price}

                                                    </Row>
                                                    <Spacer />
                                                    <Divider height={4} color="secondary" />

                                                </Card.Body>
                                            </Card>

                                        </Grid>
                                    ))
                                }
                            </Grid.Container>
                        </Modal.Body>
                    </Modal>
                </>
            )
            }
        </>
    )
}

export default ModalDetailTransaction