const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './cypress/reports',
  reportPath: './cypress/reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '120'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '11'
    }
  },
  customData: {
    title: 'Framework de Automatización - Cypress + Cucumber',
    data: [
      { label: 'Proyecto', value: 'Examen Final Cypress' },
      { label: 'Ambiente', value: 'DEV' },
      { label: 'Ejecutado por', value: 'Automation Team' }
    ]
  }
});

console.log('Reporte HTML generado exitosamente en: cypress/reports/html');