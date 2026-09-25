import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-industry-electronics-header.html';
import body from '@/components/exact/en-sa-industry-electronics-body.html';
import footer from '@/components/exact/en-sa-industry-electronics-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"682303fdbd459bbf25c50efa","data-wf-site":"67c184892f7a84b971ff49d9","data-wf-collection":"682303fdbd459bbf25c50ee6","data-wf-item-slug":"electronics"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
