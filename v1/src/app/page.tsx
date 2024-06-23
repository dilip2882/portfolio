import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Dilip</Heading>
      <Paragraph className="max-w-xl mt-4 mb-12">
        I&apos;m a Software Engineer who likes to{" "}
        <Highlight>build products</Highlight> which have a positive impact on people. I am
keen to learn any new tech and build as many projects as I can.

      </Paragraph>
      <TechStack />
      <WorkHistory />
      <Products />
    </Container>
  );
}
