import { memo, useMemo } from "react";
import classes from "./responses-block.module.css";
import { isNonEmptyFields } from "../../utils/non-emtpy-fields/non-empty-fields";
import { CodeBlock } from "../code-block/code-block";
import { WhiteCard } from "../white-card/white-card";

function ResponsesBlock({ url, headers, body, response }) {
  const isHeadersNotEmpty = useMemo(() => isNonEmptyFields(headers), [headers]);
  const isBodyNotEmpty = useMemo(() => isNonEmptyFields(body), [body]);

  return (
    <div className={classes.responses_block}>
      <WhiteCard title={'Responses'} />

      <CodeBlock title={"url"} code={url} />
      {isHeadersNotEmpty && <CodeBlock title={"headers"} code={headers} />}
      {isBodyNotEmpty && <CodeBlock title={"body"} code={body} />}
      {response && <CodeBlock title={"Response"} code={response} />}
    </div>
  );
}

export default memo(ResponsesBlock);
