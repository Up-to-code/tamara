import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-mamasandpapas-header.html';
import body from '@/components/exact/en-sa-stores-mamasandpapas-body.html';
import footer from '@/components/exact/en-sa-stores-mamasandpapas-footer.html';
import inline from '@/components/exact/en-sa-stores-mamasandpapas.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
