const translation = {
  common: {
    welcome: 'Welcome to use',
    appUnavailable: 'Aplicación no disponible',
    appUnkonwError: 'Error desconocido en la aplicación',
  },
  chat: {
    newChat: 'Nuevo Chat',
    pinnedTitle: 'Fijados',
    unpinnedTitle: 'Chats',
    newChatDefaultName: 'Conversación Nueva',
    resetChat: 'Reiniciar conversación',
    powerBy: 'Implementado por',
    prompt: 'Prompt',
    privatePromptConfigTitle: 'Configuraciones de la conversación',
    publicPromptConfigTitle: 'Indicación inicial',
    configStatusDes: 'Antes de comenzar, puedes modificar las configuraciones de la conversación',
    configDisabled:
      'Se han utilizado las configuraciones de la sesión anterior para esta sesión.',
    startChat: 'Iniciar conversación',
    privacyPolicyLeft:
      'Por favor, lee la ',
    privacyPolicyMiddle:
      'política de privacidad',
    privacyPolicyRight:
      ' proporcionada por J :D.',
    deleteConversation: {
      title: 'Eliminar conversación',
      content: '¿Estás seguro de que quieres eliminar esta conversación?',
    },
    tryToSolve: 'Intentar resolver',
    temporarySystemIssue: 'Lo siento, tenemos un problemita ...',
  },
  generation: {
    tabs: {
      create: 'Ejecutar una vez',
      batch: 'Ejecutar por lotes',
      saved: 'Guardados',
    },
    savedNoData: {
      title: '¡Aún no has guardado un resultado!',
      description: 'Comienza a generar contenido, y encuentra tus resultados guardados aquí.',
      startCreateContent: 'Comenzar a crear contenido',
    },
    title: 'Completación de IA',
    queryTitle: 'Contenido de consulta',
    completionResult: 'Resultado',
    queryPlaceholder: 'Escribe tu consulta...',
    run: 'Ejecutar',
    copy: 'Copiar',
    resultTitle: 'Completación de IA',
    noData: 'La IA te dará lo que desees aquí.',
    csvUploadTitle: 'Arrastra y suelta tu archivo CSV aquí, o ',
    browse: 'explorar',
    csvStructureTitle: 'El archivo CSV debe cumplir con la siguiente estructura:',
    downloadTemplate: 'Descarga la plantilla aquí',
    field: 'Campo',
    batchFailed: {
      info: '{{num}} ejecuciones fallidas',
      retry: 'Reintentar',
      outputPlaceholder: 'Sin contenido de salida',
    },
    errorMsg: {
      empty: 'Por favor, introduce contenido en el archivo subido.',
      fileStructNotMatch: 'El archivo CSV subido no coincide con la estructura.',
      emptyLine: 'La fila {{rowIndex}} está vacía',
      invalidLine: 'La fila {{rowIndex}}: {{varName}} no puede estar vacío',
      moreThanMaxLengthLine: 'Fila {{rowIndex}}: {{varName}} no puede tener más de {{maxLength}} caracteres',
      atLeastOne: 'Por favor, introduce al menos una fila en el archivo subido.',
    },
  },
}

export default translation
