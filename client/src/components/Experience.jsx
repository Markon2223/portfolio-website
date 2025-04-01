import { Box, Container, Typography, Paper } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Work } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Web Developer',
    company: 'Amon ICT Solution',
    period: '07/2024 - 09/2024',
    description: 'Built and optimized responsive web applications using React.js and Node.js. Integrated with MongoDB for efficient database management. Collaborated with a talented team to design and develop user-friendly web applications.',
  },
  {
    title: 'UI Designer',
    company: 'Amon ICT Solution',
    period: '07/2024 - 09/2024',
    description: 'Created dynamic and user-friendly interfaces using HTML, CSS, JavaScript, and TailwindCSS. Participated in code reviews and agile development processes, which helped refine my coding practices and teamwork skills.',
  },
  {
    title: 'Education: Computer Science',
    company: 'St. Mary\'s University',
    period: '01/2021 - 12/2024',
    description: 'Bachelor of Science in Computer Science. Developed strong foundations in programming, algorithms, and software development. Participated in various academic projects and research initiatives.',
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="experience"
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'background.default' : 'background.paper',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Work Experience
          </Typography>
        </motion.div>

        <Timeline position="alternate">
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {experience.period}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <TimelineDot color="primary">
                    <Work />
                  </TimelineDot>
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h6" component="h3">
                      {experience.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {experience.company}
                    </Typography>
                    <Typography>{experience.description}</Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience;
