import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-verify-via-nafath-contest-header.html';
import body from '@/components/exact/en-sa-verify-via-nafath-contest-body.html';
import footer from '@/components/exact/en-sa-verify-via-nafath-contest-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"68db592b00a824fb9fab374a","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
