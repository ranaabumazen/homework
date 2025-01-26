import { Box } from "@mui/material";
import CardComponent from "../CardComponent";

const JobsList = ({ JobsList }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >
            {JobsList.map((job) => (
                <CardComponent job={job} />
            ))}
        </Box>
    )
}
export default JobsList;