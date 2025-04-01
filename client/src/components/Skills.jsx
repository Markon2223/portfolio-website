import { Box, Container, Typography, Grid, Paper, LinearProgress, Tooltip } from '@mui/material';
import { Language, Storage, Code, DataObject, Cloud, Security } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Language,
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS/Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Storage,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    title: 'Database Management',
    icon: DataObject,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'Database Design', level: 78 },
    ],
  },
  {
    title: 'Development Tools',
    icon: Code,
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Object-oriented Programming', level: 85 },
    ],
  },
  {
    title: 'Professional Skills',
    icon: Security,
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Communication', level: 88 },
      { name: 'Time Management', level: 85 },
      { name: 'Leadership', level: 80 },
    ],
  },
  {
    title: 'Languages',
    icon: Language,
    skills: [
      { name: 'English', level: 85 },
      { name: 'Amharic', level: 100 },
      { name: 'Machine Learning (Basic)', level: 70 },
      { name: 'Java', level: 75 },
    ],
  },
];

const SkillCategory = ({ title, icon: Icon, skills, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid item xs={12} md={6} lg={4}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 3,
            height: '100%',
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${
                theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)'
              } 100%)`,
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: 'divider',
            '&:hover': {
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Icon color="primary" sx={{ mr: 1, fontSize: 28 }} />
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            {skills.map((skill, idx) => (
              <Tooltip key={skill.name} title={`${skill.level}%`} placement="right">
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontFamily: '"Fira Code", monospace' }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={inView ? skill.level : 0}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      '& .MuiLinearProgress-bar': {
                        transition: 'transform 1s ease-in-out',
                        background: (theme) =>
                          `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      },
                    }}
                  />
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Grid>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '"{ }"',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '400px',
          opacity: 0.02,
          fontFamily: '"Fira Code", monospace',
          color: 'primary.main',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            &lt;Skills&gt;
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              {...category}
              index={index}
            />
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              mt: 6,
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
