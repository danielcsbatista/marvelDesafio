import * as React from 'react';
import { Container, Paragraph, TitleParagraph } from './Style';

type State = {
  title: string,
  information: string,
};

type Props = {
  codeError: number,
};
export default class Error extends React.Component<Props, State> {
  state = {
    title: '',
    information: '',
  };

  componentDidMount() {
    this.filterCodeError();
  }

  filterCodeError() {
    switch (this.props.codeError) {
      case 404:
        this.setState({
          title: '404 Not found',
          information: 'The requested URL was not found on this server.',
        });
        break;
      case 409:
        this.setState({
          title: '409 Conflict',
          information:
            'The request could not be completed due to a conflict with the current state of t' +
            'he target resource.',
        });
        break;
      case 500:
        this.setState({
          title: '409 Internal Server Error',
          information:
            'The server encountered an unexpected condition that prevented it from fulfilling' +
            ' the request.',
        });
        break;
      case 401:
        this.setState({
          title: '401 Unauthorized',
          information:
            'The request has not been applied because it lacks valid authentication credentia' +
            'ls.',
        });
        break;
      default:
        this.setState({
          title: 'Unmapped error',
          information: `Get in touch with app maintainers. your_email@domain.com`,
        });
        break;
    }
  }

  render() {
    return (
      <Container>
        <TitleParagraph>{this.state.title}</TitleParagraph>
        <Paragraph>{this.state.information}</Paragraph>
      </Container>
    );
  }
}
