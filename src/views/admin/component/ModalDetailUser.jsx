import { Modal, Spacer, Text, Grid, Card } from '@nextui-org/react'
import { useRecoilValue } from 'recoil'
import { userDetailsAtom } from '../../../logic/atoms/details'

const ModalDetailUser = ({ close, visible}) => {
    const data = useRecoilValue(userDetailsAtom)
    return (
        <>
        <div className='w-full'>

        </div>
            <Modal width='35%' open={visible} closeButton onClose={close} aria-labelledby="modal-detail-user" css={{ fontFamily: "Righteous" }}>
                <Modal.Header>
                    <Text b size={24} color="secondary">
                        User
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
                                    <Text size={12} css={{ fontFamily: "Righteous", opacity:0.5}}>Fullname</Text>
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous"}}>{data.fullname}</Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Spacer />
                        <Grid md>
                        <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={12} css={{ fontFamily: "Righteous", opacity:0.5}}>Username</Text>
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous"}}>{data.username}</Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Spacer />
                        <Grid md>
                        <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={12} css={{ fontFamily: "Righteous", opacity:0.5}}>Role</Text>
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous"}}>{data.role}</Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>
                    <Spacer />
                    <Grid.Container>
                    <Grid md>
                        <Card css={{ border: 1 }}>
                                <Card.Body>
                                    <Text size={12} css={{ fontFamily: "Righteous", opacity:0.5}}>Placement</Text>
                                    <Spacer />
                                    <Text css={{ fontFamily: "Righteous"}}>Outlet: {!data.placement ? "" : data.placement.nama_outlet}</Text>
                                    <Text css={{ fontFamily: "Righteous"}}>Address: {!data.placement ? "" : data.placement.alamat}</Text>
                                    <Text css={{ fontFamily: "Righteous"}}>Phone: {!data.placement ? "" : data.placement.telepon}</Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>
                    

                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalDetailUser