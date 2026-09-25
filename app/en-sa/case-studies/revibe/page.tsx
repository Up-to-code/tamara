import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-case-studies-revibe-header.html';
import body from '@/components/exact/en-sa-case-studies-revibe-body.html';
import footer from '@/components/exact/en-sa-case-studies-revibe-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"6879164f70d52cf82be19b0c","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
