import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@material-ui/core/Button";

const apiUrl = 'https://cmp-login.herokuapp.com/api';
// const apiUrl = 'http://localhost:3000/api';

const columns = [
  {
    field: "status",
    headerName: "Status",
    width: 150,
    valueFormatter: (params: any) => {
      return params.value ? "Accepted" : "Denied";
    },
  },
  {
    field: "timestamp",
    headerName: "Updated at",
    width: 200,
    valueFormatter: (params: any) => {
      return new Date(+params.value * 1000).toLocaleString();
    },
  },
  {
    field: "updatedBy",
    headerName: "Updated by",
    width: 150,
  },
  {
    field: "settingsVersion",
    headerName: "Settings version",
    width: 200,
  },
];

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px",
  },
  headerTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerRoot: {
    width: "100%",
  },
  consentRoot: {
    display: "block",
    maxWidth: "900px",
  },
  consentsList: {
    maxHeight: "500px",
    maxWidth: "900px",
    overflow: "auto",
  },
  templateBorder: {
    borderLeft: "8px solid",
  },
});

function Consents() {
  const classes = useStyles();
  const { provider, userId } =
    useParams<{ provider: string; userId: string }>();
  const [domains, setDomains] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/consents/${provider}/${userId}`)
      .then((res) => res.data)
      .then((data) => {
        setDomains(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [provider, userId]);
  return (
    <div className={classes.container}>
      {domains.map((domain: any) => (
        <Accordion
          key={domain.hostname + domain.settingsId}
          TransitionProps={{ timeout: 300 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <CardHeader
              classes={{
                title: classes.headerTitle,
                root: classes.headerRoot,
              }}
              title={
                <>
                  <Typography variant="h5">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://${domain.hostname}`}
                    >
                      {domain.hostname}
                    </a>
                  </Typography>

                  <span>Settings Id: {domain.settingsId}</span>
                </>
              }
              subheader={`Controller Id: ${domain.controllerId}`}
            />
          </AccordionSummary>
          <AccordionDetails
            classes={{
              root: classes.consentRoot,
            }}
          >
            <Typography style={{ margin: "0 16px 16px" }} variant="h5">
              Services
            </Typography>
            <div className={classes.consentsList}>
              {domain.templates.map((template: any) => (
                <Accordion
                  classes={{
                    root: classes.templateBorder,
                  }}
                  key={template.templateId}
                  style={{
                    borderLeftColor: template.consents[0]?.status
                      ? "#17855E"
                      : "#DD2E44",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <CardHeader
                      classes={{
                        title: classes.headerTitle,
                        root: classes.headerRoot,
                      }}
                      title={
                        <>
                          <span>{template?.dataProcessor}</span>
                          {template.consents[0]?.status ? (
                            <Button
                              style={{
                                color: "#17855E",
                                borderColor: "#17855E",
                              }}
                              variant="outlined"
                            >
                              Accepted
                            </Button>
                          ) : (
                            <Button
                              style={{
                                color: "#DD2E44",
                                borderColor: "#DD2E44",
                              }}
                              variant="outlined"
                            >
                              Denied
                            </Button>
                          )}
                        </>
                      }
                      subheader={template?.defaultCategoryLabel}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ width: "100%" }}>
                      <Typography variant="body2">
                        {template?.descriptionOfService}
                      </Typography>
                      <Typography style={{ margin: "16px 0" }} variant="h5">
                        History
                      </Typography>
                      <div style={{ height: 370, width: "100%" }}>
                        <DataGrid
                          getRowId={(row) => row.consentId + row.timestamp}
                          rows={template.consents}
                          columns={columns}
                          pageSize={5}
                          rowsPerPageOptions={[5]}
                          disableSelectionOnClick
                        />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Consents;
