import React from 'react';
import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { ArcherContainer, ArcherElement } from 'react-archer';

const CurvyPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '20px',
  padding: theme.spacing(2),
  backgroundColor: '#F0F4F8',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(2),
}));

const CurvyButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  margin: theme.spacing(1),
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
}));

const categories = ['Business Innovation & Enterprise', 'Programming', 'Web & UX Design', 'Data Structures & Algorithms', 'Marketing Strategy', 'Full Stack Development for Data Science'];

const modules = {
  CL1: ['Mathematical Analysis & Application', 'Network Technologies', 'Statistical Research Methods', 'Business Innovation & Enterprise', 'Programming'],
  CL2: ['Cybersecurity Technologies & Ethics', 'AI & Data Analytics', 'Database Design & Administration', 'Web & UX Design', 'Data Structures & Algorithms'],
  CL3: ['Data Wrangling', 'Applied Machine Learning', 'Data Platform Management', 'Marketing Strategy'],
  CL4: ['AI Ethics & Governance', 'Data Journalism', 'Technology Synthesis & Application', 'Data Processing on Big Data'],
  CL5: ['Applied Deep Learning', 'Machine Learning Operations', 'Text Analytics'],
};

const outcomes = ['Analytics & Computational Modelling', 'Applied Artificial Intelligence', 'Data Strategy for AIOps', 'Emerging Technology & Application', 'Data Visualization & Journalism', 'DataOps for AI Innovation', 'Business Needs Analysis & Strategy', 'Agile Development for Data Science'];

const relationships = [
  { from: 'Mathematical Analysis & Application', to: 'Applied Machine Learning' },
  { from: 'Network Technologies', to: 'Data Wrangling' },
  { from: 'Statistical Research Methods', to: 'AI & Data Analytics' },
  { from: 'Cybersecurity Technologies & Ethics', to: 'AI Ethics & Governance' },
  { from: 'AI & Data Analytics', to: 'Applied Machine Learning' },
  { from: 'Database Design & Administration', to: 'Data Platform Management' },
  { from: 'Data Wrangling', to: 'Data Journalism' },
  { from: 'Applied Machine Learning', to: 'Applied Deep Learning' },
  { from: 'Applied Machine Learning', to: 'Machine Learning Operations' },
  { from: 'Applied Machine Learning', to: 'Text Analytics' },
  { from: 'Programming', to: 'Data Structures & Algorithms' },
  { from: 'Business Innovation & Enterprise', to: 'Marketing Strategy' },
  { from: 'Marketing Strategy', to: 'Technology Synthesis & Application' },
  { from: 'Data Platform Management', to: 'Data Processing on Big Data' },
  { from: 'Applied Machine Learning', to: 'Analytics & Computational Modelling' },
  { from: 'Applied Deep Learning', to: 'Applied Artificial Intelligence' },
  { from: 'Machine Learning Operations', to: 'Data Strategy for AIOps' },
  { from: 'Technology Synthesis & Application', to: 'Emerging Technology & Application' },
  { from: 'Data Journalism', to: 'Data Visualization & Journalism' },
  { from: 'DataOps for AI Innovation', to: 'DataOps for AI Innovation' },
  { from: 'Data Processing on Big Data', to: 'Business Needs Analysis & Strategy' },
  { from: 'AI Ethics & Governance', to: 'Agile Development for Data Science' },
];

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: '2rem' }}>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={2}>
          <CurvyPaper elevation={3}>
            <Typography variant="h5" gutterBottom>DAAA Curriculum</Typography>
            {categories.map((category, index) => (
              <CurvyButton key={index} fullWidth variant="contained">
                {category}
              </CurvyButton>
            ))}
            {/* Pagination */}
            <Box display="flex" justifyContent="center" mt={2}>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
            </Box>
          </CurvyPaper>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={10}>
          <ArcherContainer strokeColor="blue">
            <Grid container spacing={2}>
              {Object.keys(modules).map((cl, index) => (
                <Grid item xs={2} key={index}>
                  <Typography variant="h6" textAlign="center">{cl}</Typography>
                  {modules[cl].map((module, i) => (
                    <ArcherElement
                      key={i}
                      id={module}
                      relations={relationships
                        .filter((rel) => rel.from === module)
                        .map((rel) => ({
                          targetId: rel.to,
                          targetAnchor: 'left',
                          sourceAnchor: 'right',
                          style: { strokeColor: 'blue', strokeWidth: 2 },
                        }))}
                    >
                      <CurvyPaper elevation={3}>
                        <Typography variant="body1">{module}</Typography>
                      </CurvyPaper>
                    </ArcherElement>
                  ))}
                </Grid>
              ))}
              <Grid item xs={2}>
                <Typography variant="h6" textAlign="center">Outcomes</Typography>
                {outcomes.map((outcome, i) => (
                  <ArcherElement
                    key={i}
                    id={outcome}
                  >
                    <CurvyPaper elevation={3}>
                      <Typography variant="body1">{outcome}</Typography>
                    </CurvyPaper>
                  </ArcherElement>
                ))}
              </Grid>
            </Grid>
          </ArcherContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
