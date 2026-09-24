import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-case-studies-ikea-header.html';
import body from '@/components/exact/en-sa-case-studies-ikea-body.html';
import footer from '@/components/exact/en-sa-case-studies-ikea-footer.html';
import inline from '@/components/exact/en-sa-case-studies-ikea.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
