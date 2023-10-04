import { useDispatch, useSelector } from "react-redux"
import { changeLang } from "./LocaleReducer";

export const LengSwicher = () => {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.locale.lang);
    return (
        <div>
            <select value={lang} onChange={e => dispatch(changeLang(e.target.value))}>
                <option value='uk'>UK</option>
                <option value='en'>EN</option>
                <option value='pl'>PL</option>
            </select>
        </div>
    )
}