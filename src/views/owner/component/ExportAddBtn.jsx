import { Grid, Button } from "@nextui-org/react"
import { exporticon } from "../../../assets"
const ExportAddBtn = () => {
    const expicons = <img src={exporticon
    } />

    return (
        <>
            <Grid.Container justify='flex-end' gap={1}>
                <Grid>
                    <Button icon={expicons} bordered color="gradient" auto className={`font-righteous z-0`}>
                        Export All Data
                    </Button>
                </Grid>
            </Grid.Container>
        </>
    )
}

export default ExportAddBtn