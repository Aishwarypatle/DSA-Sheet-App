export function groupByTopic(problems: any[]) {
  return problems.reduce((acc: any, problem) => {
    if (!acc[problem.topic]) {
      acc[problem.topic] = [];
    }
    acc[problem.topic].push(problem);
    return acc;
  }, {});
}

export function capitalize(word:string) {
  if (!word) return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
}