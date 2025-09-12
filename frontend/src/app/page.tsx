'use client'

import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  Group, 
  Badge, 
  Box,
  Card,
  SimpleGrid,
  ThemeIcon,
  BackgroundImage,
  Overlay,
  Center
} from '@mantine/core'
import { IconVideo, IconSparkles, IconRocket, IconMicrophone, IconDownload, IconBolt } from '@tabler/icons-react'
import { VideoGenerator } from '../components/VideoGenerator'

export default function HomePage() {
  const features = [
    {
      icon: IconSparkles,
      title: "AI-Powered Scripts",
      description: "Generate engaging stories with DeepSeek AI"
    },
    {
      icon: IconMicrophone,
      title: "Text-to-Speech",
      description: "Natural voice narration in multiple languages"
    },
    {
      icon: IconVideo,
      title: "Video Composition",
      description: "Professional video creation with Remotion"
    },
    {
      icon: IconDownload,
      title: "Easy Export",
      description: "Download your videos instantly"
    }
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '60vh',
          position: 'relative'
        }}
      >
        <Container size="xl" py={80}>
          <Center style={{ minHeight: '40vh' }}>
            <Stack gap="xl" align="center" ta="center">
              <Badge 
                size="lg" 
                variant="light" 
                color="white"
                leftSection={<IconBolt size={16} />}
              >
                AI-Powered Video Creation
              </Badge>
              
              <Title 
                order={1} 
                size={60}
                fw={900}
                c="white"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  lineHeight: 1.2
                }}
              >
                Create Viral Faceless Videos
                <Text 
                  component="span" 
                  inherit 
                  c="yellow.3"
                  style={{ display: 'block' }}
                >
                  in Minutes with AI
                </Text>
              </Title>
              
              <Text 
                size="xl" 
                c="gray.2" 
                maw={600}
                style={{ fontSize: '1.3rem', lineHeight: 1.6 }}
              >
                Transform your ideas into engaging videos with AI-powered script generation, 
                professional narration, and stunning visuals. No recording required.
              </Text>

              <Group gap="md">
                <Badge variant="light" color="green" size="lg">
                  <IconRocket size={14} style={{ marginRight: 4 }} />
                  Ready to Use
                </Badge>
                <Badge variant="light" color="blue" size="lg">
                  Free AI Models
                </Badge>
                <Badge variant="light" color="purple" size="lg">
                  Professional Quality
                </Badge>
              </Group>
            </Stack>
          </Center>
        </Container>
      </Box>

      {/* Features Section */}
      <Container size="xl" py={80}>
        <Stack gap="xl" align="center">
          <Box ta="center">
            <Title order={2} size={36} mb="md">
              Everything You Need to Create Amazing Videos
            </Title>
            <Text size="lg" c="dimmed" maw={600}>
              Our platform combines the latest AI technology with professional video tools
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                shadow="md" 
                padding="xl" 
                radius="lg"
                style={{
                  border: '1px solid #eee',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Stack align="center" ta="center" gap="md">
                  <ThemeIcon 
                    size={60} 
                    radius="xl" 
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'purple', deg: 45 }}
                  >
                    <feature.icon size={30} />
                  </ThemeIcon>
                  <Title order={4} size={18}>
                    {feature.title}
                  </Title>
                  <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Video Generator Section */}
      <Box style={{ backgroundColor: '#f8f9fa' }}>
        <Container size="xl" py={80}>
          <Stack gap="xl" align="center">
            <Box ta="center">
              <Title order={2} size={36} mb="md">
                Start Creating Your Video
              </Title>
              <Text size="lg" c="dimmed" maw={600}>
                Enter your story idea and let our AI create an engaging video for you
              </Text>
            </Box>
            
            <VideoGenerator />
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}