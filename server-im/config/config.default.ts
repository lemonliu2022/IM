export default {
  sequelize: {
    dialect: 'mysql',
    username: 'didi_sXjp',
    password: 'wiP8YJLY0',
    host: '10.179.245.156',
    port: 4859,
    database: 'tool_store',
    timezone: '+08:00', // 保存为本地时区
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      }
    }
  }
}
