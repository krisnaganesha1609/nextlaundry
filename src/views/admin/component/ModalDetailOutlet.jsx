import { Modal, Spacer, Text, Grid, Card } from '@nextui-org/react'
import { useRecoilValue } from 'recoil'
import { outletDetailsAtom } from '../../../logic/atoms/details'

const ModalDetailOutlet = () => {
    const data = useRecoilValue(outletDetailsAtom)
    return (
        <>
            <div className='w-full'>

            </div>
            <Modal width='35%' open={visible} closeButton onClose={close} aria-labelledby="modal-detail-outlet" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text b size={24} color="secondary">
                        Outlet
                    </Text>
                    <Spacer x={0.35} />
                    <Text id="modal-title" size={24} css={{ fontFamily: "Righteous" }}>
                        Details
                    </Text>

                </Modal.Header>
                <Modal.Body>

                    <Grid.Container>
                        <Grid md>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={12} css={{ fontFamily: "Righteous", opacity: 0.5 }}>ID</Text>
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous" }}>{data.id_outlet}</Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Spacer />
                        <Grid md>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={12} css={{ fontFamily: "Righteous", opacity: 0.5 }}>Outlet Name</Text>
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous" }}>{data.nama_outlet}</Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Spacer />
                        <Grid md>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={12} css={{ fontFamily: "Righteous", opacity: 0.5 }}>Phone</Text>
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous" }}>{data.telepon}</Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Grid md>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={12} css={{ fontFamily: "Righteous", opacity: 0.5 }}>Total Employee</Text>
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous" }}>{data.total_emp}</Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>
                    <Spacer />
                    <Grid.Container>
                        <Grid md>
                            <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={12} css={{ fontFamily: "Righteous", opacity: 0.5 }}>Address</Text>
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous" }}>{data.alamat}</Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>


                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalDetailOutlet