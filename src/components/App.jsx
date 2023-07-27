import Statistics from './Statistics/Statistics.jsx';
import Feedback from './Feedback/Feedback.jsx';
import Section from './Section/Section.jsx';
import { Component } from 'react';
import css from './Section/Section.module.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? (good / total) * 100 : 0;

    return (
      <div>
           <Section title="Please leave your feedback" className={css.title}>
            <Feedback onLeaveFeedback={this.handleFeedback} />
        </Section>
      <Section title="Statistics" className={css.sub__title}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
         </Section>
      </div>
    );
  }
}

export default App;