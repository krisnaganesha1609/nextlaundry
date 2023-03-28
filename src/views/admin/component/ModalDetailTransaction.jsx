import { Modal, Spacer, Text, Grid, Card, Row, Divider } from '@nextui-org/react'
import React from 'react'
import { useRecoilValue } from 'recoil';
import { transactionDetailsAtom } from '../../../logic/atoms/details';

const ModalDetailTransaction = ({ visible, close}) => {
    const transaction = useRecoilValue(transactionDetailsAtom)
  return (
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
                                        //IMPLEMENT MEMBER NAME
                                    </Row>
                                    <Spacer />
                                    <Row>
                                        //IMPLEMENT OUTLET NAME
                                    </Row>
                                    <Spacer />
                                    <Row>
                                        //IMPLEMENT ESTIMATED FINISH DATE
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
                                        //IMPLEMENT TAX
                                    </Row>
                                    <Spacer />
                                    <Row>
                                        //IMPLEMENT CHARGE
                                    </Row>
                                    <Spacer />
                                    <Row>
                                        //IMPLEMENT DISCOUNT
                                    </Row>
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
                                        <Text css={{ fontFamily: "Righteous" }}>Order Details</Text>
                                        <Spacer />
                                    </Row>
                                    //PACKAGE ORDER PARENT
                                    <Spacer />
                                    <Row>
                                        //IMPLEMENT PACKAGE ORDER
                                    </Row>
                                    <Spacer />
                                    <Row justify='center'>
                                        //IMPLEMENT PACKAGE
                                    </Row>
                                    <Spacer />
                                    <Divider height={4} color="secondary" />
                                        
                                </Card.Body>
                            </Card>

                        </Grid>
                    </Grid.Container>

                </Modal.Body>
            </Modal>
    </>
  )
}

export default ModalDetailTransaction