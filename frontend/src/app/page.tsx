'use client'

import { Container, Title, Text, Stack } from '@mantine/core'
import { VideoGenerator } from '../components/VideoGenerator'

export default function HomePage() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl" align="center">
        <Stack gap="sm" align="center">
          <Title order={1} ta="center" c="blue">
            StoryShort.ai Clone
          </Title>
          <Text size="lg" ta="center" c="dimmed">
            Create viral faceless videos with AI
          </Text>
        </Stack>
        
        <VideoGenerator />
      </Stack>
    </Container>
  )
}