import { LANGUAGES } from "../../../constants/constants"
import { getObjectKeys } from "../../../utils/utils"

const Languages = () => {
    const keys = getObjectKeys(LANGUAGES)

    return (
        <div className="flex flex-row pt-6 divide-x">
            {keys.map((key, index) => {
                return (
                    <div key={index} className="flex-1">
                        <div className="flex flex-col items-center">
                            <span className="text-Snow text-xs font-bold">
                                {key}
                            </span>
                            <span className="text-xs text-gray-600">
                                {LANGUAGES[key]}
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Languages
