import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-zid-header.html';
import body from '@/components/exact/en-sa-plugins-zid-body.html';
import footer from '@/components/exact/en-sa-plugins-zid-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"68cd1c526eeb7c8cf965c728","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
