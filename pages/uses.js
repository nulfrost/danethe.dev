import Layout from "@/components/layout";
import Container from "@/components/Container";

export default function Uses() {
  return (
    <Layout title="Uses">
      <Container>
        <div className="prose">
          <h3>Hardware</h3>
          <ul>
            <li>
              <a
                href="https://ca.pcpartpicker.com/user/Danex2/saved/XBNLJx"
                target="_blank"
                rel="noopener noreferrer"
              >
                PC Specs
              </a>
            </li>
          </ul>
          <h3>Software</h3>
          <h4>Dev</h4>
          <ul>
            <li>VSCode</li>
            <li>Zsh + Oh My Zsh</li>
            <li>Figma</li>
          </ul>
          <h4>Misc</h4>
          <ul>
            <li>Spotify</li>
            <li>Notion</li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
}
