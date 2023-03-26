import { useState } from 'react'
import { Grid, Button } from "@nextui-org/react"
import { exporticon, addicon } from "../../../assets"
import ModalAddMember from './ModalAddMember'
const ExportAddBtn = ({ stmt }) => {
    const expicons = <img src={exporticon
    } />

    const addicons = <img src={addicon
    } />
    const [openMember, setOpenMember] = useState(false);
    const openModal = () => {
        switch(stmt) {
            case "Member":
            return(
                setOpenMember(true)
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
        </>
    )
}

export default ExportAddBtn