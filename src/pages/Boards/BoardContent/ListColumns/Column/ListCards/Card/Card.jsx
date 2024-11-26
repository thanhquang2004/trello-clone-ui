/* eslint-disable react/prop-types */
import GroupIcon from "@mui/icons-material/Group";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";

import {
  CardContent,
  Button,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";

import { Card as MuiCard } from "@mui/material";

function Card({ card }) {
  const shouldShowCardACtions = () => {
    return (
      !!card?.members?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    );
  };

  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
      }}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}

      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardACtions() && (
        <CardActions sx={{ p: "0 4px 8px 4px" }}>
          {!!card?.members?.length && (
            <Button size="small" startIcon={<GroupIcon />}>
              {card?.members?.length}
            </Button>
          )}
          {!!card?.comments?.length && (
            <Button size="small" startIcon={<CommentIcon />}>
              {card?.comments?.length}
            </Button>
          )}

          {!!card?.attachments?.length > 0 && (
            <Button size="small" startIcon={<AttachmentIcon />}>
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  );
}

export default Card;