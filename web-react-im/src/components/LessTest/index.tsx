import style from './index.module.less'

const LessTest = () => {
  return (
    <div className={style.element}>
      LessTest
      <div className={style['element-child']}>child</div>
    </div>
  )
}

export default LessTest
