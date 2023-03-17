import { useState } from 'react'
import { Grid, Button } from "@nextui-org/react"
import { exporticon, addicon } from "../../../assets"
import ModalAddMember from './ModalAddMember'
import ModalAddOutlet from './ModalAddOutlet'
import ModalAddUser from './ModalAddUser'
import ModalAddPackage from './ModalAddPackage'
const ExportAddBtn = ({ stmt }) => {
    const expicons = <img src={exporticon
    } />

    const addicons = <img src={addicon
    } />
    const [openMember, setOpenMember] = useState(false);
    const [openOutlet, setOpenOutlet] = useState(false);
    const [openUser, setOpenUser] = useState(false);
    const [openPackage, setOpenPackage] = useState(false);
    const openModal = () => {
        switch(stmt) {
            case "Member":
            return(
                setOpenMember(true)
            );
            case "Outlet":
            return (
                setOpenOutlet(true)
            );
            case "User":
            return (
                setOpenUser(true)
            );
            case "Package":
            return (
                setOpenPackage(true)
            );
            default: return null
        }
    };
    const closeModal = () => {
        switch (stmt) {
            case "Member":
                return (
                    setOpenMember(false)
                );
            case "Outlet":
                return (
                    setOpenOutlet(false)
                );
            case "User":
                return (
                    setOpenUser(false)
                );
            case "Package":
                return (
                    setOpenPackage(false)
                );
            default: return null
        }
    };
    const saved = () => console.log("Saved!");
    return (
        <>
            <Grid.Container justify='flex-end' gap={1}>
                <Grid>
                    <Button icon={expicons} bordered color="gradient" auto className={`font-righteous z-0`}>
                        Export All Data
                    </Button>
                </Grid>
                <Grid>
                    <Button icon={addicons} bordered color="gradient" auto className={`font-righteous z-0`} onPress={openModal}>
                        Add {stmt}
                    </Button>
                </Grid>
            </Grid.Container>
            <ModalAddMember close={closeModal} visible={openMember} save={saved} />
            <ModalAddOutlet close={closeModal} visible={openOutlet} save={saved} />
            <ModalAddUser close={closeModal} visible={openUser} save={saved} />
            <ModalAddPackage close={closeModal} visible={openPackage} save={saved} />
        </>
    )
}

export default ExportAddBtn