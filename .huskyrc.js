module.exports = {
  hooks: {
    'pre-commit': 'npm run lint',
    'pre-push': 'npm run lint'
  }
}
